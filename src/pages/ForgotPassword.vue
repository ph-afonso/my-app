<template>
    <q-page padding>
        <q-form class="row justify-center" @submit.prevent="handleForgotPassword">
            <p class="col-12 text-h5 text-center">Recuperar Senha</p>
            <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
                <q-input v-model="email" label="Email" />
                <div class="full-width q-pt-md q-gutter-y-sm">
                    <q-btn label="Enviar" color="primary" class="full-width" rounded type="submit" />
                    <q-btn label="Voltar" color="primary" class="full-width" flat rounded type="button"
                        :to="{ name: 'login' }" />
                </div>
            </div>
        </q-form>
    </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import useAuthUser from 'src/composables/UseAuthUser'


export default defineComponent({
    name: 'PageForgotPassword',
    setup() {
        const { sendPasswordResetEmail } = useAuthUser()
        const email = ref('')
        const handleForgotPassword = async () => {
            await sendPasswordResetEmail(email.value)

            alert(`Email de recuperação enviado para ${email.value}`)
        }

        return {
            email,
            handleForgotPassword
        }
    }
})
</script>