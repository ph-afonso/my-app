import { createClient } from "@supabase/supabase-js"
import useAuthUser from "src/composables/UseAuthUser"

const supabaseUrl = 'https://eplqsdqjsrtptrfocsrp.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVwbHFzZHFqc3J0cHRyZm9jc3JwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc2MDY0ODUsImV4cCI6MjAzMzE4MjQ4NX0.tFHegubU3zeDjdo7zmBuT5TXl3tQqXz7mda9PK4fMYQ'
const supabase = createClient(supabaseUrl,supabaseKey)

supabase.auth.onAuthStateChange((event, session) => {
    const { user } = useAuthUser();

    user.value = session?.user || null;
})

export default function useSupabase() {
    return supabase
}