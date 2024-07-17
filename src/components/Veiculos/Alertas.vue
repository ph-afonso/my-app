<template>
    <div class="q-gutter-md">
        <q-carousel v-model="slide" transition-prev="scale" transition-next="scale" swipeable animated padding arrows
            height="215px" class="bg-primary text-white shadow-1 rounded-borders">

            <q-carousel-slide name="abastecimento" class="column no-wrap flex-center">
                <q-icon name="local_gas_station" size="56px" />
                <div class="q-mt-md text-center">
                    Seu próximo abastecimento será Gasolina, levando em consideração seus dois últimos abastecimentos em
                    álcool.
                </div>
            </q-carousel-slide>

            <q-carousel-slide name="troca-oleo" class="column no-wrap flex-center">
                <q-icon name="build" size="56px" />
                <div class="q-mt-md text-center">
                    Sua troca de óleo está próxima, faltam 2400 km.
                </div>
            </q-carousel-slide>

            <q-carousel-slide name="km-veiculo" class="column no-wrap flex-center">
                <q-icon name="directions_car" size="56px" />
                <div class="q-mt-md text-center">
                    Faz um mês e uma semana que você não informa a km do veículo.
                </div>
            </q-carousel-slide>

            <q-carousel-slide name="melhoria" class="column no-wrap flex-center">
                <q-icon name="emoji_objects" size="56px" />
                <div class="q-mt-md text-center">
                    Sua próxima melhoria é: Revestimento de Couro do Volante.
                </div>
            </q-carousel-slide>

        </q-carousel>
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
    name: 'Alertas',

    setup() {
        return {
            slide: ref('abastecimento')
        }
    }
})
</script>