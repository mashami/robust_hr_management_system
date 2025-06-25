/* eslint-disable @typescript-eslint/no-unused-vars */
import { prisma } from '@/lib/prisma'
import { HttpStatusCode } from '@/utils/enums'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const jobs = await prisma.job.findMany({
      orderBy: { createdAt: 'desc' },
    })

    if (!jobs) {
      return NextResponse.json(
        { error: true, message: 'No jobs yet ' },
        { status: HttpStatusCode.BAD_REQUEST },
      )
    }

    return NextResponse.json(
      {
        success: true,
        message: 'jobs fetched successfully.',
        data: jobs,
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
