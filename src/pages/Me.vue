<template>
  <q-page class="flex flex-center">
    <div v-if="user">
      <p>Hello {{ user.user_metadata.meta.name }}</p>
    </div>
  </q-page>
</template>

<script>
import useAuthUser from "src/composables/UseAuthUser"
import { Loading } from 'quasar';
import { defineComponent } from "vue"

export default defineComponent({
  name: 'PageMe',

  setup() {
    const { user } = useAuthUser()

    return {
      user
    }
  }
})
</script>
