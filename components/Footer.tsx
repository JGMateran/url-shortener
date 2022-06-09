import { Coffee, Heart } from 'react-feather'

import { Container } from '@/ui/Container'
import { Text } from '@/ui/Text'

export function Footer () {
  return (
    <div className="border-t border-neutral-800">
      <Container className="h-16 flex items-center justify-center">
        <Text priority="low" className="flex items-center text-sm">
          Made with <Heart className="mx-2" /> and a lot of <Coffee className="mx-2" /> by <a href="#" className="mx-2 font-bold text-white">reburn.dev</a>
        </Text>
      </Container>
    </div>
  )
}
