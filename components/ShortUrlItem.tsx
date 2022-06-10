import { Check, Copy } from 'react-feather'

import { useCopy } from '@/hooks/useCopy'

export function ShortUrlItem ({
  original,
  shorten
}: {
  original: string,
  shorten: string
}) {
  const { copy, isCopying } = useCopy()

  const handleCopy = () => {
    copy(shorten)
  }

  return (
    <tr className="border-b last:border-b-0 border-dotted border-neutral-700">
      <td className="p-4">
        {original}
      </td>
      <td className="p-4">
        {shorten}
      </td>
      <td className="">
        <button onClick={handleCopy}>
          {
            isCopying
              ? <Check className="w-5 h-5" />
              : <Copy className="w-5 h-5" />
          }
        </button>
      </td>
    </tr>
  )
}
