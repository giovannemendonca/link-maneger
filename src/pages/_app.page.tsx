import NaveBar from '@/components/NavBar'
import { UserContextPrivide } from '@/context/UseContext'
import { globalStyles } from '@/styles/global'
import { defaultTheme } from '@/styles/themes/Default'
import { ThemeProvider } from '@emotion/react'
import type { AppProps } from 'next/app'
import { SnackbarProvider } from 'notistack'

globalStyles()
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <UserContextPrivide>
          <SnackbarProvider
            maxSnack={3}
            autoHideDuration={3000}
          >
            <NaveBar />
            <Component {...pageProps} />
          </SnackbarProvider>
        </UserContextPrivide>
      </ThemeProvider>
    </>
  )
}
