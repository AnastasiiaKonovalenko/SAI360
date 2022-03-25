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
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-[1350px]">
        <div
            v-for="(film, ind) in moviesList"
            :key="ind"
            class="flex">
            <MovieItem
                @click="$router.push({name: 'MoviePage', params: {movieId: film.id}})"
                :movie-item="film"/>
        </div>
    </div>
</template>

<style scoped>

</style>