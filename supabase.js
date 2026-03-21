import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const SUPABASE_URL = 'https://brigiuethtxksuieibto.supabase.co'
const SUPABASE_KEY = 'sb_publishable_c__PtdzxJN_6a1I3HBmjKg_9eD_bBas'

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)