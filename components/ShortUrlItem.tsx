import { useState } from 'react'

import { Copy, Eye, EyeOff } from 'react-feather'

import { useCopy } from '@/hooks/useCopy'
import { Badge } from '@/ui/Badge'

import { HOME_URL } from '@/lib/constants'

export function ShortUrlItem ({
  original,
  shorten
}: {
  original: string,
  shorten: string
}) {
  const { copy, isCopying } = useCopy()
  const [isShow, setIsShow] = useState(true)

  const handleCopy = () => {
    copy(`${HOME_URL}/${shorten}`)
  }

  const handleIsShow = () => {
    setIsShow((prev) => !prev)
  }

  return (
    <div
      className="flex p-6 items-center border-b last:border-b-0 border-dotted border-neutral-700"
    >
      <div className="flex-1 mr-6 truncate">
        {isShow ? original : `${HOME_URL}/${shorten}`}
      </div>

      <div className="flex items-center space-x-6">
        <button
          onClick={handleCopy}
        >
          {
            isCopying
              ? <Badge>Copied</Badge>
              : <Copy className="w-5 h-5" />
          }
        </button>

        <button onClick={handleIsShow}>
          {
            isShow
              ? <EyeOff className="w-5 h-5" />
              : <Eye className="w-5 h-5" />
          }
        </button>
      </div>
    </div>
  )
}
