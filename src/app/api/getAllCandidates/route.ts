/* eslint-disable @typescript-eslint/no-unused-vars */
import { prisma } from '@/lib/prisma'
import { HttpStatusCode } from '@/utils/enums'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  console.log('HELLOOOO')

  try {
    const candidates = await prisma.candidate.findRaw({
      //   orderBy: { createdAt: 'desc' },
    })

    if (!candidates) {
      return NextResponse.json(
        { error: true, message: 'NO candidate yet ' },
        { status: HttpStatusCode.BAD_REQUEST },
      )
    }

    return NextResponse.json(
      {
        success: true,
        message: 'candidate fetched successfully.',
        data: candidates,
      },
      { status: HttpStatusCode.OK },
    )
  } catch (error) {
    return NextResponse.json(
      { error: true, message: 'An error occured. Please try again.' },
      { status: HttpStatusCode.INTERNAL_SERVER },
    )
  }
}
