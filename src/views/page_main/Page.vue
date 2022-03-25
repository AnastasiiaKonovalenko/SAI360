<script>
    import MoviesList from './components/MoviesList.vue';

    export default {
        name: 'Main',
        components: { MoviesList },
    };
</script>

<template>
    <div class="flex justify-center p-4">
        <MoviesList/>
    </div>
</template>

<style scoped>

</style>