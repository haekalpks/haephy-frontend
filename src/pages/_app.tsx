import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className='w-full min-h-screen bg-black'>
      <div className='w-full min-h-screen bg-black'>
      <Component {...pageProps} />
      </div>
    </main>
  )
}

export default MyApp
