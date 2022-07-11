import { CollectionReference } from 'firebase-admin/firestore'

import isURL from 'validator/lib/isURL'

import { createAlias } from '@/lib/utils'
import { db } from '@/lib/db'

type Data = {
  url: string,
  alias: string
}

type Maybe <T> = T | null | undefined

const urlRef = db.collection('url') as CollectionReference<Data>

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

  await urlRef.add({ url, alias })

  return { url, alias }
}

export async function getShortUrl (alias: string): Promise<Maybe<Data>> {
  const shortenUrl = await urlRef.where('alias', '==', alias).get()

  if (shortenUrl.docs.length === 0) return null

  const [data] = shortenUrl.docs.map((doc) => doc.data())

  return data
}
