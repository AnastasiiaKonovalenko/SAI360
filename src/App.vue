<script>
    import { mapMutations } from 'vuex';
    import { RouterView } from 'vue-router'
    import Header from '@/views/common/Header.vue'
    import Footer from '@/views/common/Footer.vue';
    import MovieInfoForm from './views/common/MovieInfoForm.vue';

export default {
    name: 'App',
    components: {
        Header,
        Footer,
        MovieInfoForm
    },
    data() {
        return {
            isDialogVisible: false
        }
    },
    methods: {
        ...mapMutations('moduleMovies', ['addNewMovie']),
        setMovie(e) {
            this.addNewMovie(e);
            this.isDialogVisible = false;
        }
    }
}
</script>

<template>
    <div class="h-full flex flex-col">
        <Header
            @open-film-dialog="isDialogVisible=true"/>
        <MovieInfoForm
            v-if="isDialogVisible"
            @close-dialog="isDialogVisible=false"
            @set-movie="setMovie($event)"/>
        <RouterView/>
        <Footer/>
    </div>
</template>

<style>

</style>
