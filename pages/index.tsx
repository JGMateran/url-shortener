import type { NextPage } from 'next'

import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ShortUrlList } from '@/components/ShortUrlList'
import { ShortUrlForm } from '@/components/ShortUrlForm'

import { Container } from '@/ui/Container'
import { Text } from '@/ui/Text'

const Home: NextPage = () => {
  return (
    <div className="text-white min-h-screen bg-neutral-900 leading-7 selection:bg-blue-500 selection:text-white">
      <Navbar />

      <Container className="py-14 min-h-[calc(100vh-130px)]" size="small">
        <h2 className="font-bold text-4xl mb-4 text-center">
          The last URL Shortener you will need
        </h2>
        <Text priority="medium" className="text-center">
          We are an open-source alternative to the link shorteners on the market. We are known for having all our code free and open-source for anyone who wants to see it for security, learn from it or make their own shortened based on ours.
        </Text>

        <ShortUrlForm />
      </Container>

      <ShortUrlList />

      <Footer />
    </div>
  )
}

export default Home
