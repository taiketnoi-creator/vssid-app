import { createClient } from '@supabase/supabase-js';

// Thay thế các giá trị này bằng thông tin dự án thực tế của bạn từ Supabase Dashboard
// (Ví dụ: https://xyz.supabase.co và eyJhbGciOiJIUzI1NiIsIn...)
const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseAnonKey = 'YOUR_SUPABASE_ANON_KEY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
