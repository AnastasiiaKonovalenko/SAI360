<script>
    import MovieRating from './MovieRating.vue'
    export default {
        name: 'MovieItem',
        props: {
            movieItem: {
                type: Object,
                default: {}
            }
        },
        components: {
            MovieRating,
        }
    };
</script>

<template>
    <div class="movie-card flex flex-col">
        <img
            class="mb-4"
            :src="movieItem.Poster"
            :alt="`${movieItem.Title} poster`">

        <h2  class="mb-4">
            <span class="movie-card-truncated-text text-2xl">{{ movieItem.Title }}</span>
        </h2>

        <span class="movie-card-truncated-text movie-card-truncated-text-description text-base">
            {{ movieItem.Description }}
        </span>

        <MovieRating
            class="my-4"
            :imdbRating="movieItem.IMDbRating"
            :clientRating="movieItem.ClientRating"/>
    </div>
</template>

<style lang="scss" scoped>
    .movie-card {
        max-width: 19rem;
        padding: 1.5rem;
        border-radius: 0.5rem;
        background-color: #fff;
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);

        &-truncated-text {
            display: -webkit-box;
            max-width: 100%;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;

            &-description {
                -webkit-line-clamp: 4;
            }
        }
    }
</style>