export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL

export const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const VALID_ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

export const VALID_ALPHABET_LENGTH = 8

export const SHORTEN_URLS_STORAGE_KEY = 'reburn-shorten-urls'

export const HOME_URL = process.env.NODE_ENV === 'development'
  ? 'http://localhost:3000'
  : 'https://reburn-link.vercel.app'
