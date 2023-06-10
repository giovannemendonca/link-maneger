import { Heading } from '@/components/Heading'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    router.push('/auth/login')
  })

  return (
    <Heading>
      Bem vindo ao <strong>Next.js</strong>!
    </Heading>
  )
}
