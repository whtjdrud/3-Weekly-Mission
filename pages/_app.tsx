import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import MainHead from '@/components/mainhead'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const accessToken = sessionStorage.getItem('accessToken')

    const isAuthPage =
      router.pathname === '/login' || router.pathname === '/signup'

    if (isAuthPage && accessToken) {
      router.push('/folder')
    }
    if (!isAuthPage && !accessToken) {
      router.push('/login')
    }
  }, [router])

  return (
    <>
      <MainHead />
      <Component {...pageProps} />
    </>
  )
}
