<template>
  <q-page padding>
    <q-form class="row justify-center" @submit.prevent="handleRegister">
      <p class="col-12 text-h5 text-center">Registrar</p>
      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
        <q-input v-model="form.name" label="Nome" />
        <q-input v-model="form.email" label="Email" />
        <q-input v-model="form.password" label="Password" type="password" />
        <div class="full-width q-pt-md q-gutter-y-sm">
          <q-btn label="Register" color="primary" class="full-width" rounded type="submit" />
          <q-btn label="Voltar" color="primary" class="full-width" flat rounded type="button" :to="{ name: 'login' }" />
        </div>
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import useAuthUser from 'src/composables/UseAuthUser'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'PageRegister',

  setup() {
    const router = useRouter()
    const { register } = useAuthUser()

    const form = ref({
      name: '',
      email: '',
      password: ''
    })

    const handleRegister = async () => {
      try {
        // Enviando os dados do formulário para a função register
        await register({
          email: form.value.email,
          password: form.value.password,
          name: form.value.name
        })
        // Redirecionando para a página de confirmação de email
        router.push({
          name: 'email-confirmation',
          query: { email: form.value.email }
        })
      } catch (error) {
        alert(error.message)
      }
    }

    return {
      form,
      handleRegister
    }
  }
})
</script>
