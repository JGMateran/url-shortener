import type {
  GetServerSideProps
} from 'next'

import { getShortUrlByAlias } from '@/lib/db-actions'

import type { PostgrestError } from '@supabase/supabase-js'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context.params?.slug as string
  const { error, body } = await getShortUrlByAlias(slug)

  if (error) {
    return {
      props: {
        error
      }
    }
  }

  return {
    redirect: {
      destination: body.url,
      permanent: false
    }
  }
}

export default function ExamplePage ({
  error
}: {
  error: PostgrestError | null
}) {
  return (
    <div className="min-h-screen bg-black text-white font-bold">
      <h2>{JSON.stringify(error)}</h2>
    </div>
  )
}
