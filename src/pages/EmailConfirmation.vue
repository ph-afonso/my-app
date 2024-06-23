<template>
  <q-page padding>
    <p class="text-body1">
      Obrigado por se cadastrar!
    </p>
    <p class="text-body1">Confirme o seu email para finalizar seu cadastro: <b>{{ $route.query.email }}</b></p>
    <q-btn label="Voltar" color="primary" class="full-width" flat rounded type="button" :to="{ name: 'login' }" />

  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue"
export default defineComponent({
  name: 'PageEmailConfirmation',
})
</script>
