import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from '@/contexts/AuthProvider'
import { ReactNode } from 'react'

function Providers({ children }: { children: ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  )
}
