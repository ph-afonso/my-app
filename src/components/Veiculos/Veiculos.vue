<template>
    <q-banner class="bg-primary text-white" rounded>
        <div class="row col flex-center">
            <div class="col-xs-6">
                <q-avatar square size="200px">
                    <q-img src="images/veiculos/c3.png" :fit="contain" />
                </q-avatar>
            </div>
            <div class="col-xs-6 flex justify-center">
                <div>
                    <q-badge color="green" rounded class="q-mr-xs" /> Citroën C3 Soláris 1.6
                </div>
                <div class="text-h6 q-gutter-x-xs justify-center align-center">
                    <q-badge class="text-dark text-weight-bold" color="white">JHZ 1150</q-badge>
                    <q-badge class="text-dark text-weight-bold" color="white">Flex</q-badge>
                </div>
            </div>
        </div>
    </q-banner>
</template>

<script setup>
defineOptions({
    name: 'Veiculos'
})

// Props podem ser definidos conforme a necessidade
// const props = defineProps({
//     title: {
//         type: String,
//         required: true
//     },
//     caption: {
//         type: String,
//         default: ''
//     },
//     routeName: {
//         type: String,
//         default: ''
//     },
//     icon: {
//         type: String,
//         default: ''
//     }
// })
</script>
