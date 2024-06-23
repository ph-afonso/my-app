<template>
    <q-page padding>
        <div class="row flex-center justify-center items-center q-ma-lg">
            <div id="banner-recovery" class="col-xs-12 col-sm-6 col-md-6"></div>
            <div class="col-xs-12 col-sm-6 col-md-6">
                <q-form class="row justify-center" @submit.prevent="handleForgotPassword">
                    <p class="col-12 text-h5 text-center text-primary">Recuperar Senha</p>
                    <div class="col-xs-10 col-sm-10 col-md-10 q-gutter-y-sm">
                        <q-input v-model="email" label="Email" lazy-rules :rules="[
                            val => (val && val.length > 0) || 'Campo obrigatório'
                        ]" />
                        <div class="full-width q-pt-md q-gutter-y-sm">
                            <q-btn label="Enviar" color="primary" class="full-width" rounded type="submit" />
                            <q-btn label="Voltar" color="primary" class="full-width" flat rounded type="button"
                                :to="{ name: 'login' }" />
                        </div>
                    </div>
                </q-form>
            </div>
        </div>
    </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import useAuthUser from 'src/composables/UseAuthUser'
import useNotify from "src/composables/UseNotify";


export default defineComponent({
    name: 'PageForgotPassword',
    setup() {
        const { sendPasswordResetEmail } = useAuthUser()
        const { notifySuccess, notifyError } = useNotify()
        const email = ref('')
        const handleForgotPassword = async () => {
            try {
                await sendPasswordResetEmail(email.value)
                notifySuccess(`Email de recuperação enviado para ${email.value}`)
            } catch (error) {
                notifyError()
            }
        }

        return {
            email,
            handleForgotPassword
        }
    }
})
</script>

<style scoped>
#banner-recovery {
    background-image: url('assets/normal-banner-recovery-password.svg');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    height: 45vh;
}

@media (min-width: 768px) {
    #banner-recovery {
        height: 85vh;
    }
}
</style>
