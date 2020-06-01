<template>
    <v-app>
        <v-content>
            <cabecalho></cabecalho>
            <v-container fluid class="px-0 py-0">
                <nav class="pb-3 pt-2 text-center">
                    <v-btn-toggle
                        borderless
                    >
                        <v-btn class="cor-laranja" text to="/paginas/carzebel/cerimonial">Cerimonial</v-btn>
                        <v-btn class="cor-laranja" text to="/paginas/carzebel/sobre">Sobre</v-btn>
                        <v-btn class="cor-laranja" text to="/paginas/carzebel/contato">Contato</v-btn>
                    </v-btn-toggle>
                </nav>
                <transition name="component-fade" mode="out-in">
                    <router-view class="cor-marrom"></router-view>
                </transition>
                <v-btn
                    fab
                    color="#25D366"
                    bottom
                    right
                    fixed
                    @click.native.stop="click"
                    href="https://wa.me/5521999346020"
                    target="_blank"
                >
                    <v-icon color="white" large>mdi-whatsapp</v-icon>
                </v-btn>
            </v-container>
            <rodape></rodape>
        </v-content>
    </v-app>
</template>

<script>
module.exports = {
    components: {
        'cabecalho': httpVueLoader('./Cabecalho.vue'),
        'rodape': httpVueLoader('./Rodape.vue'),
    },
    mounted: function () {

    }
}
</script>

<style scoped>
    .v-content__wrap {
        display: flex;
        flex-direction: column;
    }
</style>
