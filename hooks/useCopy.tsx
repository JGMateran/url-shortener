import { useCallback, useState } from 'react'

import copyToClipboard from 'copy-to-clipboard'

export function useCopy (time: number = 1000) {
  const [isCopying, setIsCopying] = useState<boolean>(false)

  const copy = useCallback(
    (value: string) => {
      copyToClipboard(value)

      setIsCopying(true)

      window.setTimeout(
        () => {
          setIsCopying(false)
        },
        time
      )
    },
    [time]
  )

  return {
    isCopying,
    copy
  }
}
