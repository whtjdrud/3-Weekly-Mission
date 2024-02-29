import { LoginForm } from '@/types/sign'

export interface User {
  auth_id: string
  created_at: string
  email: string
  image_source: string
  name: string
}
export interface AuthContextType {
  user: User | null
  isPending: boolean
  login: (data: LoginForm) => void
  signUp: (data: LoginForm) => void
  logout: () => void
}
