<template>
  <q-page padding>
    <div class="row flex-center items-center">
      <div id="banner-login" class="col-xs-12 col-sm-6 col-md-6"></div>
      <div class="col-xs-12 col-sm-6 col-md-6">
        <q-form class="row justify-center" @submit.prevent="handleLogin">
          <p class="col-12 text-h5 text-center text-primary">Treehouse</p>
          <div class="col-xs-10 col-sm-10 col-md-10 q-gutter-y-sm border">
            <q-input color="primary" label="Email" v-model="form.email" lazy-rules :rules="[
              val => (val && val.length > 0) || 'Campo obrigatório'
            ]" />
            <q-input label="Password" v-model="form.password" type="password" lazy-rules :rules="[
              val => (val && val.length > 0) || 'Campo obrigatório'
            ]" />
            <div class="full-width q-pt-md">
              <q-btn label="Login" color="primary" class="full-width" outlined rounded type="submit" />
            </div>
            <q-btn label="Recuperar Senha" color="primary" class="full-width" flat rounded
              :to="{ name: 'forgot-password' }" />
            <!-- <div class="full-width">
              <q-btn label="Register" color="primary" class="full-width" flat rounded to="/register" />
            </div> -->
          </div>
        </q-form>
      </div>
    </div>
  </q-page>
</template>
<script>
import { defineComponent, ref } from "vue"
import useAuthUser from "src/composables/UseAuthUser"
import useNotify from "src/composables/UseNotify";
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'PageLogin',

  setup() {
    const router = useRouter()

    const { login } = useAuthUser()
    const { notifySuccess, notifyError } = useNotify()

    const form = ref({
      email: '',
      password: ''
    })

    const handleLogin = async () => {
      try {
        await login(form.value)
        notifySuccess('Login efetuado com sucesso !')
        router.push({ name: 'me' })

      } catch (error) {
        notifyError()
      }
    }

    return {
      form,
      handleLogin
    }
  }
})
</script>

<style scoped>
#banner-login {
  background-image: url('assets/normal-banner-login.svg');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  height: 45vh;
}

@media (min-width: 768px) {
  #banner-login {
    height: 90vh;
  }
}
</style>
