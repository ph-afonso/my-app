<template>
    <q-page padding>
        <div class="row justify-center">
            <div class="col-12 text-center">
                <p class="text-h6">Novo Abastecimento</p>
            </div>
            <q-form class="col-md-7 col-xs-12 col-sm-12 q-gutter-y-md" @submit.prevent="handleSubmit">
                <q-input label="Veículo ID" v-model="form.veiculo_id" />
                <q-input label="Data" type="date" v-model="form.data" />
                <q-select v-model="form.combustivel_abastecido" label="Combustível Abastecido" :options="combustiveis"
                    emit-value map-options />
                <q-input label="Valor Gasolina" v-model="form.valor_gasolina" />
                <q-input label="Valor Aditivada" v-model="form.valor_aditivada" />
                <q-input label="Valor Álcool" v-model="form.valor_alcool" />
                <q-input label="Litragem" v-model="form.litragem" />

                <q-btn label="Cadastrar" color="primary" class="full-width" rounded type="submit" />
                <q-btn label="Voltar" color="primary" class="full-width" rounded flat :to="{ name: 'car' }" />
            </q-form>
        </div>
    </q-page>
</template>

<script>
import useApi from "src/composables/UseApi";
import useAuthUser from "src/composables/UseAuthUser";
import useNotify from "src/composables/UseNotify";
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
    name: 'Abastecimentos',
    setup() {
        const table = 'abastecimentos';
        const router = useRouter();
        const { user } = useAuthUser();
        const { post } = useApi();
        const { notifySuccess, notifyError } = useNotify();

        const form = ref({
            veiculo_id: '',
            data: '',
            combustivel_abastecido: '', // Será populado pelo select
            valor_gasolina: '',
            valor_aditivada: '',
            valor_alcool: '',
            litragem: ''
        });

        // Opções para o select de combustível abastecido
        const combustiveis = [
            { label: 'Álcool', value: 'Álcool' },
            { label: 'Gasolina', value: 'Gasolina' },
            { label: 'Aditivada', value: 'Aditivada' }
        ];

        const handleSubmit = async () => {
            try {
                // Convert veiculo_id to integer before sending to API if necessary
                form.value.veiculo_id = parseInt(form.value.veiculo_id);

                const formData = {
                    ...form.value,
                    user_id: user.value.id // Adiciona o user_id aqui
                };

                await post(table, formData);
                notifySuccess('Abastecimento cadastrado com sucesso!');
                router.push({ name: 'car' });
            } catch (error) {
                notifyError('Não foi possível cadastrar');
            }
        };

        return {
            handleSubmit,
            form,
            combustiveis // Passa as opções para o template
        };
    }
});
</script>

<style scoped>
/* Estilos opcionais para o componente */
</style>
