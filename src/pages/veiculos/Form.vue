<template>
    <q-page padding>
        <div class="row justify-center">
            <div class="col-12 text-center">
                <p class="text-h6">Form Veiculos</p>
            </div>
            <q-form class="col-md-7 col-xs-12 col-sm-12 q-gutter-y-md" @submit.prevent="handleSubmit">
                <q-input label="Veiculo" v-model="form.name" />
                <q-btn label="Cadastrar" color="primary" class="full-width" rounded type="submit" />
                <q-btn label="Voltar" color="primary" class="full-width" rounded flat :to="{ name: 'car' }" />
            </q-form>
        </div>
    </q-page>
</template>

<script>
import useApi from "src/composables/UseApi";
import useNotify from "src/composables/UseNotify";
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
    name: 'PageFormCar',
    setup() {
        const table = 'veiculos'
        const router = useRouter()
        const { post } = useApi()
        const { notifySuccess, notifyError } = useNotify()

        const form = ref({
            name: ''
        })

        const handleSubmit = async () => {
            try {
                await post(table, form.value)
                notifySuccess()
                router.push({ name: 'car' })
            } catch (error) {
                notifyError('Não foi possivel cadastrar')
            }
        }

        return {
            handleSubmit,
            form
        }

    }
})
</script>