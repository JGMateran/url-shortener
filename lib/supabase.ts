import { createClient } from '@supabase/supabase-js'

import {
  SUPABASE_URL,
  SUPABASE_ANON_KEY
} from '@/lib/constants'

export const db = createClient(
  SUPABASE_URL as string,
  SUPABASE_ANON_KEY as string
)
