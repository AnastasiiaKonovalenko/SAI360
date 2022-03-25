<script>
    import StarIcon from 'vue-material-design-icons/Star.vue';
    import EditMovieInfoForm from '../common/MovieInfoForm.vue';
    import { mapMutations } from 'vuex';

    export default {
        name: 'MoviePage',
        components: {
            EditMovieInfoForm,
            StarIcon
        },
        data(){
            return {
                movieItem: {},
                isEditDialogVisible: false,
            }
        },
        beforeMount() {
            this.movieItem = {...this.$store.state.moduleMovies.moviesList.find(item => this.$route.params.movieId === item.id)};
        },
        methods: {
            ...mapMutations('moduleMovies', ['editMovie']),
            setMovie(e) {
                this.editMovie(e);
                this.movieItem = {...e}
            }
        }
    };
</script>

<template>
    <div class="m-4 grow">
        <EditMovieInfoForm
            v-if="isEditDialogVisible"
            @close-dialog="isEditDialogVisible=false"
            @set-movie="setMovie($event)"
            :movieItem="movieItem" />
        <h1>{{ movieItem.Title }}</h1>
        <div class="flex flex-row mt-4">
            <img
                class="mr-4"
                :src="movieItem.Poster"
                :alt="`${movieItem.Title} poster`"/>
            <div>
                <div>{{ movieItem.Description }}</div>
                <div class="mt-5">Year: {{ movieItem.Year }}</div>
                <div class="mt-2">Length: {{ movieItem.Runtime }}</div>
                <div class="flex flex-row mt-2">
                    IMDb RATING:
                    <star-icon
                        class="ml-2"
                        fillColor="orange"/>
                    {{ movieItem.IMDbRating }}/5
                </div>
                <div class="mt-10">
                    <button @click="isEditDialogVisible=true" class="app-main-btn">Edit</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>