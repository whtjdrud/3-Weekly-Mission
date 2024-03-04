import { LoginForm } from '@/types/sign'

export interface HeaderPageProps {
  user: User
}

export interface ProfileProps {
  imageSource: string
  email: string
}

export interface User {
  id: string
  email: string
  imageSource: string
  name: string
}

export interface AuthContextType {
  user: User | null
  isPending: boolean
  login: (data: LoginForm) => void
  signUp: (data: LoginForm) => void
  logout: () => void
}
