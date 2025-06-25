import { prisma } from '@/lib/prisma'
import { HttpStatusCode } from '@/utils/enums'
import { JopType, JopLevel, PriorityStatus, Jobstatus } from '@prisma/client'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const {
      title,
      department,
      location,
      type,
      level,
      minSalary,
      maxSalary,
      description,
      requirements,
      skills,
      benefits,
      status,
      applicationDeadline,
      openings,
      priority,
      hiringManager,
    } = await req.json()

    if (!title || !department || !location || !description) {
      return NextResponse.json(
        {
          error: true,
          message: 'Title, department, location, and description are required',
        },
        { status: HttpStatusCode.BAD_REQUEST },
      )
    }

    if (
      minSalary &&
      maxSalary &&
      parseFloat(minSalary) > parseFloat(maxSalary)
    ) {
      return NextResponse.json(
        {
          error: true,
          message: 'Minimum salary cannot be greater than maximum salary',
        },
        { status: HttpStatusCode.BAD_REQUEST },
      )
    }

    if (minSalary && parseFloat(minSalary) < 0) {
      return NextResponse.json(
        { error: true, message: 'Minimum salary must be a positive number' },
        { status: HttpStatusCode.BAD_REQUEST },
      )
    }

    if (maxSalary && parseFloat(maxSalary) < 0) {
      return NextResponse.json(
        { error: true, message: 'Maximum salary must be a positive number' },
        { status: HttpStatusCode.BAD_REQUEST },
      )
    }

    if (openings && parseInt(openings) < 1) {
      return NextResponse.json(
        { error: true, message: 'Number of openings must be at least 1' },
        { status: HttpStatusCode.BAD_REQUEST },
      )
    }

    if (applicationDeadline && new Date(applicationDeadline) <= new Date()) {
      return NextResponse.json(
        { error: true, message: 'Application deadline must be in the future' },
        { status: HttpStatusCode.BAD_REQUEST },
      )
    }

    const jobData = {
      title: title.trim(),
      department: department.trim(),
      location: location.trim(),
      type: type || JopType.FullTime,
      level: level || JopLevel.Officer,
      minSalary: minSalary ? parseFloat(minSalary) : null,
      maxSalary: maxSalary ? parseFloat(maxSalary) : null,
      description: description.trim(),
      requirements: Array.isArray(requirements)
        ? requirements.filter((req: string) => req.trim() !== '')
        : [],
      skills: Array.isArray(skills)
        ? skills.filter((skill: string) => skill.trim() !== '')
        : [],
      benefits: Array.isArray(benefits)
        ? benefits.filter((benefit: string) => benefit.trim() !== '')
        : [],
      status: status || Jobstatus.Open,

      ...(applicationDeadline && {
        applicationDeadline: new Date(applicationDeadline),
      }),
      openings: openings ? parseInt(openings) : 1,
      priority: priority || PriorityStatus.Medium,
      ...(hiringManager?.trim() && { hiringManager: hiringManager.trim() }),
    }

    const job = await prisma.job.create({
      data: jobData,
    })

    if (!job) {
      return NextResponse.json(
        { error: true, message: 'Error creating job. Please try again' },
        { status: HttpStatusCode.BAD_REQUEST },
      )
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Job created successfully.',
        data: job,
      },
      { status: HttpStatusCode.OK },
    )
  } catch (error) {
    console.error('Error creating job:', error)
    return NextResponse.json(
      { error: true, message: 'An error occurred. Please try again.' },
      { status: HttpStatusCode.INTERNAL_SERVER },
    )
  }
}
