import { HttpStatusCode } from '@/utils/enums'
import { SignupType } from '@/utils/types'
import { NextResponse } from 'next/server'

export const signUp = async ({
  email,
  password,
  name,
  retypePassword,
}: SignupType) => {
  const response = await fetch(`/api/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name,
      email,
      password,
      retypePassword,
    }),
    cache: 'no-store',
  })

  const result = await response.json()

  return result
}

// export const getUserInfo = async () => {
//   const response = await fetch(`/api/getuserInfo`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     // body: JSON.stringify({}),
//     cache: 'no-store',
//   })

//   const result = await response.json()

//   return result
// }

export const getUserInfo = async () => {
  const response = await fetch(`/api/getuserInfo`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    cache: 'no-store',
  })

  if (!response.ok) {
    return NextResponse.json(
      { error: true, message: 'Failed to fetch user' },
      { status: HttpStatusCode.BAD_REQUEST },
    )
  }

  const result = await response.json()
  return result
}
