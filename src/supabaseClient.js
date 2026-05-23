import { createClient } from '@supabase/supabase-js';

// Thay thế các giá trị này bằng thông tin dự án thực tế của bạn từ Supabase Dashboard
const supabaseUrl = 'https://mkbxywacmwwkwgzazqcr.supabase.co';
const supabaseAnonKey = 'sb_publishable_gikonQYjFJUJhGb7DcjoWg_LhecHqb-';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
