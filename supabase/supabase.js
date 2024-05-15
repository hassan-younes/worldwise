import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://cacjntweecliybujafra.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNhY2pudHdlZWNsaXlidWphZnJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU4MDc1NDgsImV4cCI6MjAzMTM4MzU0OH0.j5xhEk9VP5v7FETZJtDu5Nz5NZHm_a7DawGOUY7R1n4"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;