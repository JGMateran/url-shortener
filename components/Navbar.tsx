import { Container } from '@/ui/Container'
import { Text } from '@/ui/Text'

import { Coffee, GitHub, Twitter } from 'react-feather'

export function Navbar () {
  return (
    <div className="z-10 sticky top-0 backdrop-blur-sm bg-neutral-900/90 border-b border-neutral-800">
      <Container className="h-16 flex items-center">
        <Text priority="medium">
          <a href="https://www.reburn.dev" target="_blank" rel="noopener noreferrer">
            Reburn Shortener
          </a>
        </Text>
        <div className="flex-1"></div>
        <div className="flex items-center space-x-6">
          <a href="https://ko-fi.com/reburn" target="_blank" rel="noopener noreferrer">
            <Coffee />
          </a>
          <a href="https://www.twitter.com/reburn_dev" target="_blank" rel="noopener noreferrer">
            <Twitter />
          </a>
          <a href="https://www.github.com/JGMateran" target="_blank" rel="noopener noreferrer">
            <GitHub />
          </a>
        </div>
      </Container>
    </div>
  )
}
