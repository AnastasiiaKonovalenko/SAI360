<script>
    import { mapState } from 'vuex';
    import MovieItem from './MovieItem.vue';

    export default {
        name: 'MoviesList',
        components: { MovieItem },
        computed: {
            ...mapState('moduleMovies', ['moviesList'])
        }
    };
</script>

<template>
    <div class="grid grid-cols-4 gap-4 max-w-[1350px]">
        <div v-for="(film, ind) in moviesList">
            <MovieItem
                :key="ind"
                :movie-item="film"/>
        </div>
    </div>
</template>

<style scoped>

</style>