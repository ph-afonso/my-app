<template>
    <div class="q-gutter-sm">
        <q-banner class="bg-primary text-white" rounded>
            <q-avatar square size="200px">
                <q-img src="src\assets\c3_62_1620x1000.png" :fit="contain" />
            </q-avatar>
        </q-banner>
    </div>
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
