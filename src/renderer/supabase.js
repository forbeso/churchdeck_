import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://loqlxhsgwifkynavahyc.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxvcWx4aHNnd2lma3luYXZhaHljIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4MjM1Mzg2OCwiZXhwIjoxOTk3OTI5ODY4fQ.Ylu8707EXojukkRHJ50jOyRqo7wgw6osWjvH40QL8p4';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
