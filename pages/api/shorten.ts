import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { url } = req.body

    if (url == null) {
      res.status(400).json({ error: 'url is required' })
    } else {
      res.status(200).json({
        url
      })
    }
  } else {
    res.status(405).json({ error: 'method not allowed' })
  }
}
