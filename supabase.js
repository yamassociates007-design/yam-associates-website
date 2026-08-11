
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ttrifwaoyjamowgtoygc.supabase.co';

const supabaseAnonKey = 'sb_publishable_OPrSBhIYl1xVbd3AyIl4wg_rPO1pDEn';

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);
