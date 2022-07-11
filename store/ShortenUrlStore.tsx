import {
  useContext,
  useReducer,
  createContext,
  useEffect
} from 'react'

import { getStore } from '@/lib/localStore'

import type { ReactNode } from 'react'

type ShortenUrl = {
  url: string,
  alias: string
}

type State = ShortenUrl[]

type Action =
  | {
    type: 'merge',
    payload: ShortenUrl[]
  }
  | {
    type: 'insert',
    payload: ShortenUrl
  }

type Dispatch = (action: Action) => void

const ShortenUrlContext = createContext<
  { state: State, dispatch: Dispatch } | undefined
>(undefined)

function shortenUrlReduder (state: State, action: Action) {
  switch (action.type) {
    case 'merge':
      return [
        ...state,
        ...action.payload
      ]

    case 'insert':
      return [
        ...state,
        action.payload
      ]

    default:
      throw new Error('Unhandled action type')
  }
}

export function useShortenUrl () {
  const context = useContext(ShortenUrlContext)

  if (context == null) {
    throw new Error('useShortenUrl must be used within a ShortenUrlProvider')
  }

  return context
}

export function ShortenUrlProvider ({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(shortenUrlReduder, [])

  const value = { state, dispatch }

  useEffect(
    () => {
      const store = getStore('reburn-shorten-urls')

      dispatch({
        type: 'merge',
        payload: store
      })
    },
    []
  )

  return (
    <ShortenUrlContext.Provider value={value}>
      {children}
    </ShortenUrlContext.Provider>
  )
}
