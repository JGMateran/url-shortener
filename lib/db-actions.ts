import { supabase } from '@/lib/supabase'

import { customAlphabet } from 'nanoid'

import {
  VALID_ALPHABET,
  VALID_ALPHABET_LENGTH
} from './constants'

export function createAlias () {
  return customAlphabet(VALID_ALPHABET, VALID_ALPHABET_LENGTH)()
}

export async function createUrl ({ url }: { url: string }) {
  const res = await fetch('/api/shorten', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ url })
  })

  const json = await res.json()

  return json
}

export async function getShortUrlByAlias (alias: string) {
  return await supabase
    .from('urls')
    .select('url, alias')
    .eq('alias', alias)
    .single()
}

export async function createShortUrl ({
  url,
  alias = createAlias()
}: {
  url: string,
  alias?: string
}) {
  if (url == null) return

  return await supabase
    .from('urls')
    .insert({
      alias,
      url
    })
}
