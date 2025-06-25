import { prisma } from '@/lib/prisma'
import { HttpStatusCode } from '@/utils/enums'
import { Role } from '@prisma/client'
import { hash } from 'bcrypt'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { name, email, password, retypePassword } = await req.json()

  if (!name || !email || !password || !retypePassword) {
    return NextResponse.json(
      { error: true, message: 'All fields are required' },
      { status: HttpStatusCode.BAD_REQUEST },
    )
  }

  const role = Role

  if (retypePassword !== password) {
    return NextResponse.json(
      { error: true, message: "Password doesn't match" },
      { status: HttpStatusCode.BAD_REQUEST },
    )
  }

  try {
    const userWithEmail = await prisma.user.findFirst({
      where: { email },
    })

    if (userWithEmail) {
      return NextResponse.json(
        { error: true, message: 'User with this email exists.' },
        { status: HttpStatusCode.BAD_REQUEST },
      )
    }
    const hashedPassword = await hash(password, 10)

    // Save user in DB
    const user = await prisma.user.create({
      data: {
        name,
        email,
        role: role.HR,
        password: hashedPassword,
      },
    })

    if (!user) {
      return NextResponse.json(
        { error: true, message: 'Error creating user. Please try again' },
        { status: HttpStatusCode.BAD_REQUEST },
      )
    }

    return NextResponse.json(
      {
        success: true,
        message: 'User create successfully.',
      },
      { status: HttpStatusCode.OK },
    )
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { error: true, message: 'An error occured. Please try again.' },
      { status: HttpStatusCode.INTERNAL_SERVER },
    )
  }
}
