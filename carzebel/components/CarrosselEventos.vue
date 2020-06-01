<template>
    <div>
        <v-slide-group
            center-active
            :value="imagensEventos.findIndex(imagem => imagem == imagemDestacada)"
        >
            <v-slide-item
                v-for="imagemEvento in imagensEventos"
                :key="imagensEventos.findIndex(imagem => imagem.src == imagemEvento.src)"
                v-slot:default="{ active }"
            >
                <v-card
                class="overflow-hidden thumb-evento"
                tile
                ripple
                >
                    <v-row
                        class="fill-height"
                        align="center"
                        justify="center"
                    >
                        <v-img
                            class="fill-height"
                            :src="`${imagemEvento.src}`"
                            :lazy-src="`${imagemEvento.src}`"
                            @click.stop="destacarImagemClicada(imagemEvento)"
                        >
                    </v-row>
                </v-card>
            </v-slide-item>
        </v-slide-group>
        <v-dialog
            v-model="dialog"
            overlay-color="#fff"
            content-class="ma-0"
            overlay-opacity="0.8"
        >
            <v-card v-if="imagemDestacada"> 
                <v-img :src="`${ imagemDestacada.src }`"></v-img>
            </v-card>
        </v-dialog>
    </div>

</template>

<script>
module.exports = {
    methods: {
        destacarImagemClicada: function(imagemClicada) {
            if (imagemClicada) { 
                this.dialog = true;
                this.imagemDestacada = imagemClicada;
            };
        }
    },
    data: function() {
        return {
            dialog: false,
            imagemDestacada: null,
            imagensEventos: [
                {
                    "src": "../img/imagens-eventos/1.jpg",
                    "legenda": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                },
                {
                    "src": "../img/imagens-eventos/2.jpg",
                    "legenda": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                },
                {
                    "src": "../img/imagens-eventos/3.jpg",
                    "legenda": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                },
                {
                    "src": "../img/imagens-eventos/4.jpg",
                    "legenda": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                },
                {
                    "src": "../img/imagens-eventos/5.jpg",
                    "legenda": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                },
                {
                    "src": "../img/imagens-eventos/6.jpg",
                    "legenda": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                },
                {
                    "src": "../img/imagens-eventos/7.jpg",
                    "legenda": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                },
                {
                    "src": "../img/imagens-eventos/8.jpg",
                    "legenda": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                },
                {
                    "src": "../img/imagens-eventos/9.jpg",
                    "legenda": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                },
                {
                    "src": "../img/imagens-eventos/10.jpg",
                    "legenda": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                },
                {
                    "src": "../img/imagens-eventos/11.jpg",
                    "legenda": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                },
                {
                    "src": "../img/imagens-eventos/12.jpg",
                    "legenda": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
            ]
        }
    }
}
</script>

<style scoped>
    .thumb-evento {
        width: calc((100vw - 2em) * 0.75)!important;
    }
</style>