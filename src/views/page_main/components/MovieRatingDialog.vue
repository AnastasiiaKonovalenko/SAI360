<script>
    import StarIcon from 'vue-material-design-icons/Star.vue';
    import StarOutlineIcon from 'vue-material-design-icons/StarOutline.vue';
    import { mapMutations } from 'vuex';

    export default {
        name: 'MovieRatingDialog.vue',
        props: {
            movieItem: {
                type: Object,
                default: {},
            },
        },
        components: {
            StarIcon,
            StarOutlineIcon,
        },
        data(){
            return {
                rating: 0,
                dialogState: [0, 0, 0, 0, 0]
            }
        },
        computed: {
            imdbRating() {
                return this.movieItem.IMDbRating;
            },
            clientRating() {
                return this.movieItem.ClientRating;
            },
            isDisabledSubmitBtn() {
                return this.rating > 0;
            }
        },
        watch: {
            rating() {
                this.dialogState = this.dialogState.map((item, i) => i >= this.rating ? 0 : 1);
            }
        },
        beforeMount() {
            this.rating = this.movieItem.ClientRating || 0;
        },
        methods: {
            ...mapMutations('moduleMovies', ['changeClientRating']),
            setRating(rating) {
                this.rating = rating + 1;
            },
            saveRating() {
                if(!this.isDisabledSubmitBtn) return;

                this.changeClientRating({
                    id: this.movieItem.id,
                    value: this.rating
                })
                this.$emit('close-dialog');
            }
        }
    };
</script>

<template>
    <div class="rating-card flex">
        <div class="rating-card__inner flex flex-col m-auto">
            <div class="flex self-center">
                <div
                    class="star"
                    v-for="(star, idx) in dialogState"
                    :key="idx">
                    <button
                        @click.stop="setRating(idx)"
                        :class="{'ml-2': idx > 0}"
                        class="flex">
                        <star-icon v-if="dialogState[idx] > 0" fillColor="#87b0de" />
                        <star-outline-icon v-else fillColor="#87b0de"/>
                    </button>
                </div>
            </div>

            <div class="self-end mt-4">
                <button
                    class="rounded-sm border border-red-500 mr-2 px-2 py-1"
                    @click.stop="$emit('close-dialog')">
                    Cancel
                </button>
                <button
                    class="border border-green-300 bg-green-300 rounded-sm text-white px-2 py-1"
                    :class="{'disabled-btn': !isDisabledSubmitBtn}"
                    @click.stop="saveRating">
                    Submit
                </button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .rating-card {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        &__inner {
            max-width: 80%;
            padding: 1.5rem;
            border-radius: 0.5rem;
            background-color: #fff;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
    }
    .disabled-btn {
        opacity: 0.4;
    }
</style>