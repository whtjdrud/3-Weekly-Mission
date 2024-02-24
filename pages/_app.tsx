import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const accessToken = sessionStorage.getItem('accessToken')

    if (router.pathname === '/signup' || router.pathname === '/login') {
      if (accessToken) {
        router.push('/folder')
      }
    }

    if (router.pathname === '/folder' && !accessToken) {
      router.push('/login')
    }
  }, [router])

  return (
    <>
      <Component {...pageProps} />
    </>
  )
}
