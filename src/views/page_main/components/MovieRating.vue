<script>
    import StarIcon from 'vue-material-design-icons/Star.vue';
    import StarOutlineIcon from 'vue-material-design-icons/StarOutline.vue';

    export default {
        name: 'MovieRating.vue',
        props: {
            imdbRating: {
                type: String,
                default: '',
            },
            clientRating: {
                type: String,
                default: '',
            }
        },
        components: {
            StarIcon,
            StarOutlineIcon
        }
    };
</script>

<template>
    <div class="flex grow justify-between">
        <div class="flex flex-row">
            <star-icon
                class="mr-2"
                fillColor="orange"/>
            <span>{{ imdbRating }}</span>
        </div>

        <div class="flex flex-row">
            <star-icon
                v-if="clientRating"
                class="mr-2"
                fillColor="#87b0de"/>
            <star-outline-icon v-else fillColor="#87b0de"/>
            <span>{{ clientRating }}</span>
        </div>
    </div>
</template>

<style scoped>

</style>