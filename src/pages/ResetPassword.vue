<template>
    <q-page padding>
        <q-form class="row justify-center" @submit.prevent="handlePasswordReset">
            <p class="col-12 text-h5 text-center">Resetar Senha</p>
            <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
                <q-input v-model="password" label="Nova Senha" />
                <div class="full-width q-pt-md q-gutter-y-sm">
                    <q-btn label="Enviar" color="primary" class="full-width" rounded type="submit" />
                </div>
            </div>
        </q-form>
    </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import useAuthUser from 'src/composables/UseAuthUser'
import { useRouter, useRoute } from 'vue-router'


export default defineComponent({
    name: 'PageResetPassord',
    setup() {
        const { resetPassword } = useAuthUser()
        const router = useRouter()
        const route = useRoute()
        const token = route.query.token
        const password = ref('')

        const handlePasswordReset = async () => {
            await resetPassword(token, password.value)
            router.push({ name: 'login' })
        }

        return {
            password,
            handlePasswordReset
        }
    }
})
</script>