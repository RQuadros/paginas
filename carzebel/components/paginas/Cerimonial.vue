<template>
    <section>

        <carrossel></carrossel>

        <aside  class="py-10">

            <v-row
                no-gutters
                class="mb-6"
            >
                <v-col
                    v-for="cerimonia in listaCerimonias"
                    :key="cerimonia"
                    cols="6"
                    md="4"
                    class="coluna-lista-cerimonial"
                    
                >
                    <v-card
                        class="cor-marrom font-weight-light mb-2"
                        tile
                        elevation="0"
                    >
                        {{ cerimonia }}
                    </v-card>
                </v-col>
            </v-row>

            <h3 class="font-weight-light text-center mb-5">Mais Serviços</h3>
            
            <v-row
                no-gutters
            >
                <v-col
                    v-for="servico in listaServicos"
                    :key="servico"
                    cols="6"
                    md="4"
                    class="coluna-lista-cerimonial"
                    
                >
                    <v-card
                        class="cor-marrom font-weight-light mb-2"
                        tile
                        elevation="0"
                    >
                        {{ servico }}
                    </v-card>
                </v-col>
            </v-row>

        </aside>

    </section>
</template>

<script>
module.exports = {
    components: {
        'carrossel': httpVueLoader('../CarrosselEventos.vue'),
    },
    data: function() {
        return {
            listaCerimonias: [
                "Casamentos",
                "15 Anos",
                "Chás Diversos",
                "Bodas",
                "Aniversários",
                "Confraternizações"
            ],
            listaServicos: [
                "Buquês",
                "Decoração",
                "Atrações Musicais",
                "Passeios/Transporte"
            ]
        }

    }
}
</script>

<style scoped>
.coluna-lista-cerimonial > div {
    margin-left: 8px;
    text-align: left;
}
.coluna-lista-cerimonial:nth-child(odd) > div {
    margin-right: 8px;
    text-align: right;
}
</style>