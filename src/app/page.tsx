'use client'

import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import HomeContainer from '@/components/Home/HomeContainer'
import { Rubik } from 'next/font/google'

const rubik = Rubik({ subsets: ['latin'] });

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'blue.800',
        color: 'white'
      },
      fonts: {
        heading: 'var(--font-rubik)',
        body: 'var(--font-rubik)',
      }
    }
  }
})

export default function Home() {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-rubik: ${rubik.style.fontFamily};
          }
        `}
      </style>
      <ChakraProvider theme={theme}>
        <main className="flex min-h-screen flex-col items-center justify-between">
          <HomeContainer />
        </main>
      </ChakraProvider>
    </>
  )
}
