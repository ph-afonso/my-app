<template>
  <q-page padding>
    <div class="row">
      <div id="banner-login" class="col-xs-12 col-sm-6 col-md-6"></div>
      <div class="col-xs-12 col-sm-6 col-md-6">
        <q-form class="row justify-center" @submit.prevent="handleLogin">
          <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-sm">
            <q-input color="purple-12" label="Email" v-model="form.email">
              <template v-slot:prepend>
                <q-icon name="mail" />
              </template>
            </q-input>
            <q-input label="Password" v-model="form.password" type="password" />
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
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'PageLogin',

  setup() {
    const router = useRouter()

    const { login } = useAuthUser()

    const form = ref({
      email: '',
      password: ''
    })

    const handleLogin = async () => {
      try {
        await login(form.value)
        router.push({ name: 'me' })
      } catch (error) {
        alert(error.message)
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
</style>
