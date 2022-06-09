import type { NextPage } from 'next'

import { ShortUrlForm } from '@/components/ShorUrlForm'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Container } from '@/ui/Container'
import { ShortUrlsList } from '@/components/ShortUrlsList'
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
          Lorem deleniti ea obcaecati harum quae est Culpa assumenda sapiente id facere ad numquam voluptates, accusamus. Unde odio velit aliquam sunt eligendi Ipsa cupiditate enim odio architecto cumque ratione? Quis
        </Text>

        <ShortUrlForm />
      </Container>

      <ShortUrlsList />

      <Footer />
    </div>
  )
}

export default Home
