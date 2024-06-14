import { ref } from 'vue'
import useSupabase from 'src/boot/supabase'

const data = ref(null)

export default function useAuthUser() {
    const supabase = useSupabase()

    const login = async ({ email, password }) => {
        const { data, error } = await supabase.auth.signIn({ email, password })
        if (error) throw error
        return data
    }

    const loginWithSocialProvider = async (provider) => {
        const { data, error } = await supabase.auth.signIn({ provider })
        if (error) throw error
        return data
    }

    const logout = async () => {
        const { error } = await supabase.auth.signOut()
        if (error) throw error
    }

    const isLoggedIn = () => {
        return !!data.value
    }

    const register = async ({ email, password, ...meta }) => {
        const { data, error } = await supabase.auth.signUp(
            { email, password },
            {
                data: meta,
                redirectTo: `${window.location.origin}/me?fromEmail=registrationConfirmation`,
            }
        )
        if (error) throw error
        return data
    }

    const updateProfile = async (profileData) => {
        const { data, error } = await supabase.auth.update(profileData)
        if (error) throw error
        return data
    }

    const sendPasswordResetEmail = async (email) => {
        const { data, error } = await supabase.auth.api.resetPasswordForEmail(email)
        if (error) throw error
        return data
    }

    return {
        data,
        login,
        loginWithSocialProvider,
        logout,
        isLoggedIn,
        register,
        updateProfile,
        sendPasswordResetEmail
    }
}
