import 'next-auth'
import type { DefaultSession } from 'next-auth'
declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: DefaultSession['user'] & {
      id: string
      name: string
      role: string
    }
  }
  interface User extends DefaultUser {
    role: string
  }
}
