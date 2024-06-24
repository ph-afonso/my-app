<template>
    <q-page padding>
        <div class="row">
            <q-table class="col-12" :rows="rows" :columns="columns" row-key="id">
                <template v-slot:top>
                    <span class="text-h6">
                        Veiculos
                    </span>
                    <q-space />
                    <q-btn label="Novo Veiculo" color="primary" />
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
const columns = [
    { name: 'name', align: 'left', label: 'Modelo', field: 'name', sortable: true },
    { name: 'actions', align: 'right', label: '', field: 'actions', sortable: true }
]

const rows = [
    {
        id: '1',
        name: 'C3'
    },
    {
        id: '2',
        name: 'Celta'
    },
    {
        id: '3',
        name: 'Fusca'
    },
]

import { defineComponent } from "vue"

export default defineComponent({
    name: 'PageCarList',

    setup() {
        return {
            columns,
            rows
        }
    }
})
</script>