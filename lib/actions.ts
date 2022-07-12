import isURL from 'validator/lib/isURL'

import { createAlias } from '@/lib/utils'
import { db } from '@/lib/supabase'

type Data = {
  url: string,
  alias: string
}

type Maybe <T> = T | null | undefined

export async function createShortUrl ({
  url,
  alias = createAlias()
}: {
  url: string,
  alias?: string
}): Promise<Maybe<Data>> {
  if (url == null) return

  if (!isURL(url, { require_protocol: true })) {
    url = `http://${url}`
  }

  await db.from('shorten_url').insert({ url, alias })

  return { url, alias }
}

export async function getShortUrl (alias: string): Promise<Maybe<Data>> {
  const { error, data } = await db.from('shorten_url').select('url, alias').eq('alias', alias).single()

  if (error) return null

  return data
}
