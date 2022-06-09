import { Container } from '@/ui/Container'
import { Text } from '@/ui/Text'

import { GitHub, Twitter } from 'react-feather'

export function Navbar () {
  return (
    <div className="z-10 sticky top-0 backdrop-blur-sm bg-neutral-900/90 border-b border-neutral-800">
      <Container className="h-16 flex items-center">
        <Text priority="medium">
          Reburn Shortener
        </Text>
        <div className="flex-1"></div>
        <div className="flex items-center space-x-6">
          <a href="#">
            <Twitter />
          </a>
          <a href="#">
            <GitHub />
          </a>
        </div>
      </Container>
    </div>
  )
}
