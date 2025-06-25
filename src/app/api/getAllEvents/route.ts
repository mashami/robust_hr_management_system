/* eslint-disable @typescript-eslint/no-explicit-any */
import { prisma } from '@/lib/prisma'
import { HttpStatusCode } from '@/utils/enums'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const active = searchParams.get('active')
    const phase = searchParams.get('phase')
    const search = searchParams.get('search')

    const skip = (page - 1) * limit

    // Build where clause for filtering
    const where: any = {}

    if (active !== null && active !== undefined && active !== 'all') {
      where.active = active === 'true'
    }

    if (phase && phase !== 'all') {
      where.phase = { contains: phase, mode: 'insensitive' }
    }

    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { position: { contains: search, mode: 'insensitive' } },
        { phase: { contains: search, mode: 'insensitive' } },
      ]
    }

    // Get events with pagination
    const [events, total] = await Promise.all([
      prisma.event.findMany({
        where,
        skip,
        take: limit,
        orderBy: { startTime: 'asc' },
      }),
      prisma.event.count({ where }),
    ])

    return NextResponse.json(
      {
        success: true,
        data: events,
        pagination: {
          page,
          limit,
          total,
          pages: Math.ceil(total / limit),
        },
      },
      { status: HttpStatusCode.OK },
    )
  } catch (error) {
    console.error('Error fetching events:', error)
    return NextResponse.json(
      { error: true, message: 'An error occurred while fetching events.' },
      { status: HttpStatusCode.INTERNAL_SERVER },
    )
  }
}
