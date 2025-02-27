import {createClient} from '@supabase/supabase-js'

export const supabase = createClient(
    process.env.NEXT_PUBLIC_SUBASE_URL!,
    process.env.NEXT_PUBLIC_SUBASE_ANON_KEY!
    // proccess.env.NEXT_PUBLIC_SUBASE_SERVICE_ROLE_KEY
)