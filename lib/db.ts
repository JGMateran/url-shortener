import '@/lib/firebase'

import { getFirestore } from 'firebase-admin/firestore'

import { createAlias } from '@/lib/utils'

export const db = getFirestore()

const candyRef = db.collection('candy')

export async function createUrl ({
  url,
  alias = createAlias()
}: {
  url?: string,
  alias?: string
}) {
  if (url == null) return

  return alias
}

export async function getCandies () {
  const data: any = []

  const candies = await candyRef.get()

  candies.forEach((candy) => {
    const item = candy.data()

    data.push(item)
  })

  return data
}
