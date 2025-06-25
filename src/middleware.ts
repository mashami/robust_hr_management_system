export { default } from 'next-auth/middleware'
import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'
export const config = {
  matcher: [
    '/dashboard/:path* ',
    '/calendar/:path*',
    '/candidates/:path*',
    '/jobs/:path*',
    '/reports/:path*',
  ],
}

export async function middleware(req: NextRequest) {
  const session = await getToken({ req })
  const url = req.nextUrl
  const path = url.pathname

  if (
    (!session &&
      (path.startsWith('/dashboard') ||
        path.startsWith('/calendar') ||
        path.startsWith('/candidates') ||
        path.startsWith('/jobs'))) ||
    path.startsWith('/reports')
  ) {
    const url = req.nextUrl.clone()
    url.pathname = '/signin'
    return NextResponse.redirect(url)
  }
  // else {
  //   return NextResponse.redirect('/')
  // }
}
