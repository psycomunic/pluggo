// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://nvcfxdfgmkglwielylbl.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im52Y2Z4ZGZnbWtnbHdpZWx5bGJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU2MzA1MDUsImV4cCI6MjA2MTIwNjUwNX0.4NAXAbAhrE1rZa0FISDUn9OHfbN6MWD9-VFlyfIrxlw";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);