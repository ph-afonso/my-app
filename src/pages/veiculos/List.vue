<template>
    <q-page padding>

        <div class="row q-gutter-x-sm">
            <div class="col-sm-12">
                <Veiculos />
            </div>
            <q-table class="col-12" :rows="abastecimentos" :columns="columnsAbastecimentos" row-key="id"
                :loading="loading">
                <template v-slot:top>
                    <span class="text-h6">
                        Abastecimentos
                    </span>
                    <q-space />
                    <q-btn icon="mdi-plus" label="Novo Abastecimento" color="primary" dense
                        :to="{ name: 'form-abastecimento' }" />
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

        <div class="row q-gutter-x-sm">
            <q-card class="col-12">
                <q-card-section>
                    <apexchart type="line" :options="chartOptions" :series="chartSeries" height="400" />
                </q-card-section>
            </q-card>
        </div>
    </q-page>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import Veiculos from 'components/Veiculos/Veiculos.vue';
import useApi from "src/composables/UseApi";
import useNotify from "src/composables/UseNotify";
import VueApexCharts from 'vue3-apexcharts';

const columnsAbastecimentos = [
    { name: 'data', align: 'left', label: 'Data', field: 'data', sortable: true },
    { name: 'veiculo_id', align: 'left', label: 'Veiculo', field: 'veiculo_id', sortable: true },
    { name: 'combustivel_abastecido', align: 'left', label: 'Combustível', field: 'combustivel_abastecido', sortable: true },
    { name: 'litragem', align: 'left', label: 'Quantidade', field: 'litragem', sortable: true },
    { name: 'valor_gasolina', align: 'left', label: 'Valor Gasolina', field: 'valor_gasolina', sortable: true },
    { name: 'valor_aditivada', align: 'left', label: 'Valor Aditivada', field: 'valor_aditivada', sortable: true },
    { name: 'valor_alcool', align: 'left', label: 'Valor Álcool', field: 'valor_alcool', sortable: true },
    { name: 'actions', align: 'right', label: '', field: 'actions', sortable: false }
];

export default defineComponent({
    name: 'PageCarList',

    components: {
        Veiculos,
        Apexchart: VueApexCharts,
    },

    setup() {
        const abastecimentos = ref([]);
        const loading = ref(true);
        const { list } = useApi();
        const { notifyError } = useNotify();

        const chartOptions = ref({
            chart: {
                id: 'chart-abastecimentos',
                toolbar: {
                    show: false,
                },
            },
            xaxis: {
                type: 'category',
                categories: [],
            },
            yaxis: {
                title: {
                    text: 'Valor',
                },
            },
            tooltip: {
                x: {
                    format: 'd/m/yyyy',
                },
            },
        });

        const chartSeries = ref([
            {
                name: 'Valor Gasolina',
                data: [],
            },
            {
                name: 'Valor Aditivada',
                data: [],
            },
            {
                name: 'Valor Álcool',
                data: [],
            },
        ]);

        const handleListAbastecimentos = async () => {
            try {
                loading.value = true;
                const data = await list('abastecimentos');
                abastecimentos.value = data;

                // Preparando dados para o gráfico
                chartOptions.value.xaxis.categories = data.map(item => item.data);
                chartSeries.value[0].data = data.map(item => ({ x: item.data, y: parseFloat(item.valor_gasolina) }));
                chartSeries.value[1].data = data.map(item => ({ x: item.data, y: parseFloat(item.valor_aditivada) }));
                chartSeries.value[2].data = data.map(item => ({ x: item.data, y: parseFloat(item.valor_alcool) }));

                loading.value = false;
            } catch (error) {
                notifyError('Não foi possível listar os abastecimentos.');
                loading.value = false;
            }
        };

        onMounted(() => {
            handleListAbastecimentos();
        });

        return {
            columnsAbastecimentos,
            abastecimentos,
            loading,
            chartOptions,
            chartSeries
        };
    }
});
</script>

<style scoped>
/* Estilos opcionais para o componente */
</style>
