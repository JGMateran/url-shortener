import type { NextApiRequest, NextApiResponse } from 'next'

import { createShortUrl } from '@/lib/actions'

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'POST': {
      const url = req.body.url

      const data = await createShortUrl({ url })

      res.json({
        error: null,
        data
      })

      break
    }

    default: {
      res.json({
        error: true,
        data: null
      })

      break
    }
  }
}
