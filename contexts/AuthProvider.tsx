import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { useLoginUser } from '@/libs/client/useLoginUser'
import { LoginForm } from '@/types/sign'
import axiosClient from '@/libs/axiosClient'
import { useSignUpUser } from '@/libs/client/useSignUpUser'
import { useRouter } from 'next/router'
import { AuthContextType } from '@/types/user'
import { missingContextError } from '@/constants/errorMessage'

const AuthContext = createContext<AuthContextType>({
  user: null,
  isPending: true,
  login: (data: LoginForm) => {},
  signUp: (data: LoginForm) => {},
  logout: () => {},
})

export function AuthProvider({ children }: { children: ReactNode }) {
  const router = useRouter()
  const [values, setValues] = useState({
    user: null,
    isPending: true,
  })

  useEffect(() => {
    getMe()
  }, [])

  async function getMe() {
    setValues((prevValues) => ({
      ...prevValues,
      isPending: true,
    }))
    let nextUser: any
    try {
      const res = await axiosClient.get('/users')
      nextUser = res.data[0]
    } catch {
    } finally {
      setValues((prevValues) => ({
        ...prevValues,
        user: nextUser,
        isPending: false,
      }))
    }
  }

  async function login(data: LoginForm) {
    await useLoginUser(data)
    await getMe()

    if (router.pathname === '/shared') {
      router.back()
    } else {
      // 다른 페이지에서 로그인하는 경우 지정된 경로로 이동합니다.
      await router.push('/folder')
    }
  }

  async function signUp(data: LoginForm) {
    await useSignUpUser(data)
    await getMe()
    await router.push('/folder')
  }

  async function logout() {
    /** To do 로그아웃 구현하기 **/
  }

  const contextValue = useMemo(
    () => ({
      user: values.user,
      isPending: values.isPending,
      login,
      logout,
      signUp,
    }),
    [values.user, values.isPending, login, logout, signUp],
  )

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  )
}

export function useAuth(required: boolean) {
  const context = useContext(AuthContext)
  const router = useRouter()

  if (!context) {
    throw new Error(missingContextError)
  }

  useEffect(() => {
    if (required && !context.user && !context.isPending) {
      router.push('/login')
    }
  }, [context.user, context.isPending, router, required])
  return context
}
