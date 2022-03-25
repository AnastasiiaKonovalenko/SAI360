<script>
    import StarIcon from 'vue-material-design-icons/Star.vue';
    import StarOutlineIcon from 'vue-material-design-icons/StarOutline.vue';
    import MovieRatingDialog from './MovieRatingDialog.vue';

    export default {
        name: 'MovieItem',
        props: {
            movieItem: {
                type: Object,
                default: {}
            }
        },
        components: {
            MovieRatingDialog,
            StarOutlineIcon,
            StarIcon
        },
        data() {
            return {
                isRatingDialogOpened: false,
                imgIsValid: true,
            }
        },
        computed: {
            imdbRating() {
                return this.movieItem.IMDbRating;
            },
            clientRating() {
                return this.movieItem.ClientRating;
            },
        },
        beforeMount() {
            return this.readURL(this.movieItem.Poster)
        },
        methods: {
            async readURL(url) {
                const res = await fetch(url);
                const buff = await res.blob();


                this.imgIsValid = buff.type.startsWith('image/')
            }
        }
    };
</script>

<template>
    <div class="movie-card flex flex-col relative grow">
        <img
            v-if="movieItem.Poster && imgIsValid"
            ref="blah"
            class="mb-4"
            :src="movieItem.Poster"
            :alt="`${movieItem.Title} poster`">
        <img
            v-else
            class="mb-4"
            src="../../../assets/Movie.jpeg"
            :alt="`${movieItem.Title} poster`">

        <h2  class="mb-4">
            <span class="movie-card-truncated-text text-2xl">{{ movieItem.Title }}</span>
        </h2>

        <span class="movie-card-truncated-text movie-card-truncated-text-description text-base grow">
            {{ movieItem.Description }}
        </span>

        <div class="flex justify-between mt-4">
            <div class="flex flex-row">
                <star-icon
                    class="mr-2"
                    fillColor="orange"/>
                <span>{{ imdbRating }}</span>
            </div>

            <div class="flex flex-row">
                <button
                    class="flex mr-2"
                    @click.stop="isRatingDialogOpened=!isRatingDialogOpened">
                    <star-icon
                        v-if="clientRating"
                        fillColor="#87b0de"/>
                    <star-outline-icon
                        v-else
                        fillColor="#87b0de"/>
                </button>
                <span>{{ clientRating }}</span>
            </div>
        </div>

        <MovieRatingDialog
            @click.stop
            v-if="isRatingDialogOpened"
            @close-dialog="isRatingDialogOpened=false"
            class="absolute"
            :movieItem="movieItem"/>
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