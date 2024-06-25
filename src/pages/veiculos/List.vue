<template>
    <q-page padding>
        <div class="row">
            <q-table class="col-12" :rows="veiculos" :columns="columns" row-key="id" :loading="loading">
                <template v-slot:top>
                    <span class="text-h6">
                        Veiculos
                    </span>
                    <q-space />
                    <q-btn icon="mdi-plus" label="Novo Veiculo" color="primary" dense :to="{ name: 'form-car' }" />
                </template>
                <template v-slot:body-cell-actions="props">
                    <q-td class="q-gutter-x-sm" :props="props">
                        <q-btn icon="mdi-pencil-outline" color="primary" dense>
                            <q-tooltip>
                                Editar
                            </q-tooltip>
                        </q-btn>
                        <q-btn icon="mdi-delete-outline" color="negative" dense>
                            <q-tooltip>
                                Deletar
                            </q-tooltip>
                        </q-btn>
                    </q-td>
                </template>
            </q-table>
        </div>
    </q-page>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import useApi from "src/composables/UseApi";
import useNotify from "src/composables/UseNotify";

const columns = [
    { name: 'name', align: 'left', label: 'Modelo', field: 'name', sortable: true },
    { name: 'actions', align: 'right', label: '', field: 'actions', sortable: false }
];

export default defineComponent({
    name: 'PageCarList',

    setup() {
        const veiculos = ref([]);
        const loading = ref(true)
        const { list } = useApi();
        const { notifySuccess, notifyError } = useNotify();

        const handleListVeiculos = async () => {
            try {
                loading.value = true
                veiculos.value = await list('veiculos');
                loading.value = false
            } catch (error) {
                notifyError('Não foi possível listar os veículos.');
            }
        };

        onMounted(() => {
            handleListVeiculos();
        });

        return {
            columns,
            veiculos,
            loading
        };
    }
});
</script>
