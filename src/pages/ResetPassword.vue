<template>
    <q-page padding>
        <div class="row flex-center justify-center items-center q-ma-lg">
            <div id="banner-recovery" class="col-xs-12 col-sm-6 col-md-6"></div>
            <div class="col-xs-12 col-sm-6 col-md-6">
                <q-form class="row justify-center" @submit.prevent="handlePasswordReset">
                    <p class="col-12 text-h5 text-center text-primary">Resetar Senha</p>
                    <div class="col-xs-10 col-sm-10 col-md-10 q-gutter-y-sm">
                        <q-input v-model="password" label="Nova Senha" lazy-rules :rules="[
                            val => (val && val.length > 0) || 'Campo obrigatório',
                            val => (!val || val.length >= 6) || 'Sua senha precisa ter pelo menos 6 caracteres'
                        ]" />
                        <div class="full-width q-pt-md q-gutter-y-sm">
                            <q-btn label="Enviar" color="primary" class="full-width" rounded type="submit" />
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
import { useRouter, useRoute } from 'vue-router'


export default defineComponent({
    name: 'PageResetPassord',
    setup() {
        const { resetPassword } = useAuthUser()
        const { notifySuccess, notifyError } = useNotify()
        const router = useRouter()
        const route = useRoute()
        const token = route.query.token
        const password = ref('')

        const handlePasswordReset = async () => {
            try {
                await resetPassword(token, password.value)
                notifySuccess('Senha resetada com sucesso !')
                router.push({ name: 'login' })
            } catch (error) {
                notifyError()
            }


        }

        return {
            password,
            handlePasswordReset
        }
    }
})
</script>

<style scoped>
#banner-recovery {
    background-image: url('assets/normal-banner-reset-password.svg');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    height: 45vh;
}

@media (min-width: 768px) {
    #banner-recovery {
        height: 75vh;
    }
}
</style>