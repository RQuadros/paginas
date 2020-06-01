<template>
    <header class="bg-laranja d-flex flex-row align-center justify-center">
        <h1 @click="navegarParaHome" class="pb-3 pt-1 mb-1 cor-marrom">
            <strong>Carzebel</strong> <span>Festas&nbsp;&amp;&nbsp;Eventos</span>
        </h1>
    </header>
</template>

<script>
module.exports = {
    methods: {
        navegarParaHome: function () {
            if (this.$route.path !== '/') {
                this.$router.push('/');
            }
        }
    }
}
</script>

<style scoped>
    header h1 {
        align-items: center;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        position: relative;
    }

    header h1 span {
        text-transform: uppercase;
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0.2px;
        margin-left: 13px;
        margin-top: -9px;
    }

    header h1 strong {
        font-display: optional;
        font-family: 'Kaushan Script', cursive;
        font-size: 40px;
        font-weight: 400;
        text-transform: none;
    }

    header img {
        filter: grayscale(1);
        mix-blend-mode: multiply;
        opacity: 0.85;
        width: 78px;
    }
</style>