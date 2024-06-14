<template>
  <q-page padding>
    <q-form class="row justify-center" @submit.prevent="handleLogin">
      <p class="col-12 text-h5 text-center">Registrar</p>
      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
        <q-input label="Nome" />
        <q-input label="Email" />
        <q-input label="Password" />
        <div class="full-width q-pt-md">
          <q-btn label="Register" color="primary" class="full-width" outlined rounded type="submit" />
        </div>
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { defineComponent } from "vue"

export default defineComponent({
  name: 'PageRegister',


})
</script>
