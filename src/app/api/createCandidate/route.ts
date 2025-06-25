import { prisma } from '@/lib/prisma'
import { HttpStatusCode } from '@/utils/enums'
import { Status } from '@prisma/client'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    // Add logging to debug

    const {
      name,
      email,
      phone,
      position,
      experience,
      status,
      supervisor,
      expectedSalary,
      currentSalary,
      noticePeriod,
    } = await req.json()

    // Validate required fields
    if (!name || !email || !position || !experience) {
      return NextResponse.json(
        {
          error: true,
          message: 'Name, email, position, and experience are required',
        },
        { status: HttpStatusCode.BAD_REQUEST },
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: true, message: 'Please provide a valid email address' },
        { status: HttpStatusCode.BAD_REQUEST },
      )
    }

    // Check if candidate with this email already exists
    const existingCandidate = await prisma.candidate.findFirst({
      where: { email: email.toLowerCase() },
    })

    if (existingCandidate) {
      console.log('Validation failed: Email already exists')
      return NextResponse.json(
        { error: true, message: 'Candidate with this email already exists.' },
        { status: HttpStatusCode.BAD_REQUEST },
      )
    }

    // Prepare data for database insertion
    const candidateData = {
      name: name.trim(),
      email: email.toLowerCase().trim(),
      phone: phone?.trim() || null,
      position: position.trim(),
      experience: parseInt(experience),
      //   skills: Array.isArray(skills)
      //     ? skills.filter((skill) => skill.trim() !== '')
      //     : [],
      status: status || Status.Applied,
      supervisor: supervisor?.trim() || '',
      expectedSalary: expectedSalary ? parseFloat(expectedSalary) : null,
      currentSalary: currentSalary ? parseFloat(currentSalary) : null,
      noticePeriod: noticePeriod?.trim() || null,
    }

    // console.log('Creating candidate with data:', candidateData)

    // Create candidate in database
    const candidate = await prisma.candidate.create({
      data: candidateData,
    })

    // console.log('Candidate created successfully:', candidate.id)

    // Always return valid JSON
    return NextResponse.json(
      {
        success: true,
        error: false,
        message: 'Candidate created successfully.',
        data: candidate,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error('Error in createCandidate API:', error)

    // Always return valid JSON, even on error
    return NextResponse.json(
      {
        success: false,
        error: true,
        message:
          error instanceof Error
            ? error.message
            : 'An error occurred. Please try again.',
        data: null,
      },
      { status: 500 },
    )
  }
}
