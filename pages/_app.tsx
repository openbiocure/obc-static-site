import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Prevent auto-scroll to hash on page load
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname)
    }
    // Ensure page starts at top
    window.scrollTo(0, 0)
  }, [])

  return <Component {...pageProps} />
}

