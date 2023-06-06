import { globalStyles } from '@/styles/global'
import { defaultTheme } from '@/styles/themes/Default'
import { ThemeProvider } from '@emotion/react'
import type { AppProps } from 'next/app'

globalStyles()
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <ThemeProvider theme={defaultTheme}>
    <Component {...pageProps} />
    </ThemeProvider>
    </>
  )
}
