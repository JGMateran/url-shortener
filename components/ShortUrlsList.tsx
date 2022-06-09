import { Copy } from 'react-feather'

import { Container } from '@/ui/Container'
import { Text } from '@/ui/Text'

function ShortUrlsItem ({
  original,
  shorten
}: {
  original: string,
  shorten: string
}) {
  return (
    <tr className="border-b last:border-b-0 border-dotted border-neutral-700">
      <td className="p-4">
        {original}
      </td>
      <td className="p-4">
        {shorten}
      </td>
      <td className="p-4 flex items-center justify-center">
        <button>
          <Copy className="w-5 h-5" />
        </button>
      </td>
    </tr>
  )
}

const links = [
  {
    id: 0,
    original: 'https://www.google.com',
    shorten: 'short.ly/odc32IUB'
  },
  {
    id: 1,
    original: 'https://www.facebook.com',
    shorten: 'short.ly/odc32IUB'
  }
]

export function ShortUrlsList () {
  return (
    <div>
      <div className="border-y border-neutral-800 h-16 justify-center flex items-center">
        <Text className="text-sm" priority="low">
          Shorten links
        </Text>
      </div>
      <div className="py-20">

        <Container size="smaller">
          <h2 className="text-3xl text-center font-bold mb-2">
            All your links
          </h2>
          <Text priority="medium" className="mb-10 text-center text-sm leading-6">
            Recuerda que todos los links están almacenados en el localstorage, ten mucho cuidado.
          </Text>
        </Container>
        <Container size="small">
          <table className="w-full">
            <tbody>
              {
                links.map(({ id, original, shorten }) => (
                  <ShortUrlsItem
                    key={id}
                    original={original}
                    shorten={shorten}
                  />
                ))
              }
            </tbody>
          </table>
        </Container>
      </div>
    </div>
  )
}
