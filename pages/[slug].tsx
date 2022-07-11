import type {
  GetServerSideProps
} from 'next'

import Link from 'next/link'

import { getShortUrl } from '@/lib/actions'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context.params?.slug as string

  const data = await getShortUrl(slug)

  if (data == null) {
    return {
      props: {}
    }
  }

  return {
    redirect: {
      destination: data.url,
      permanent: false
    }
  }
}

export default function ExamplePage () {
  return (
    <div className="min-h-screen flex p-6 items-center justify-center bg-neutral-900 text-neutral-200">
      <div className="text-center">
        <h2 className="font-bold text-6xl">404</h2>
        <p className="text-lg mt-10">Page not found</p>
        <p className="max-w-sm mx-auto text-sm text-neutral-500 mb-10 mt-2">The page you are looking for might have been removed,had its name changed or is temporarily unavalible.</p>

        <Link href="/">
          <a className="bg-blue-800 inline-block py-3 px-5 font-bold rounded-full">Go to home</a>
        </Link>
      </div>
    </div>
  )
}
