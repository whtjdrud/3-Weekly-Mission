import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import MainHead from '@/components/mainhead'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MainHead />
      <Component {...pageProps} />
    </>
  )
}
