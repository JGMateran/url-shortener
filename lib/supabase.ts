import { createClient } from '@supabase/supabase-js'

import {
  SUPABASE_URL,
  SUPABASE_ANON_KEY
} from './constants'

if (SUPABASE_URL == null || SUPABASE_ANON_KEY == null) {
  throw new Error('SUPABASE_URL and SUPABASE_ANON_KEY must be set')
}

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
)
