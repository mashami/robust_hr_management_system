import { prisma } from '@/lib/prisma'
import { HttpStatusCode } from '@/utils/enums'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const {
      startTime,
      endTime,
      name,
      position,
      phase,
      active = true,
    } = await req.json()

    // Validate required fields
    if (!startTime || !endTime || !name || !position || !phase) {
      return NextResponse.json(
        {
          error: true,
          message: 'All fields except active status are required',
        },
        { status: HttpStatusCode.BAD_REQUEST },
      )
    }

    // Validate time format (assuming HH:MM format)
    const timeRegex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/
    if (!timeRegex.test(startTime) || !timeRegex.test(endTime)) {
      return NextResponse.json(
        { error: true, message: 'Please provide valid time format (HH:MM)' },
        { status: HttpStatusCode.BAD_REQUEST },
      )
    }

    // Validate that end time is after start time
    const [startHour, startMin] = startTime.split(':').map(Number)
    const [endHour, endMin] = endTime.split(':').map(Number)
    const startMinutes = startHour * 60 + startMin
    const endMinutes = endHour * 60 + endMin

    if (endMinutes <= startMinutes) {
      return NextResponse.json(
        { error: true, message: 'End time must be after start time' },
        { status: HttpStatusCode.BAD_REQUEST },
      )
    }

    // Prepare data for database insertion
    const eventData = {
      startTime: startTime.trim(),
      endTime: endTime.trim(),
      name: name.trim(),
      position: position.trim(),
      phase: phase.trim(),
      active: Boolean(active),
    }

    // Create event in database
    const event = await prisma.event.create({
      data: eventData,
    })

    if (!event) {
      return NextResponse.json(
        { error: true, message: 'Error creating event. Please try again' },
        { status: HttpStatusCode.BAD_REQUEST },
      )
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Event created successfully.',
        data: event,
      },
      { status: HttpStatusCode.OK },
    )
  } catch (error) {
    console.error('Error creating event:', error)
    return NextResponse.json(
      { error: true, message: 'An error occurred. Please try again.' },
      { status: HttpStatusCode.INTERNAL_SERVER },
    )
  }
}
