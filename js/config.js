// js/config.js
const SUPABASE_URL = 'https://ibsrerwshgyakwjjdish.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_s7URzKPnGoMg_X4oY-tZ3w_IvFP0EMl';

// ✨ แก้เป็นบรรทัดนี้เพื่อไม่ให้ชื่อชนกับ CDN
window.supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);