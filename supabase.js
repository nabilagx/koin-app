import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const SUPABASE_URL = 'https://brigiuethtxksuieibto.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJyaWdpdWV0aHR4a3N1aWVpYnRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM4MzM3MjYsImV4cCI6MjA4OTQwOTcyNn0.WtQMwK6rDnVWd7Adexi-WPESseUwgHJhlnOSRpXaGgM'

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)