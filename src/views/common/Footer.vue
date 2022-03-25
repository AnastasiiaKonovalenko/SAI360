<script>
    export default {
        name: 'Footer'
    };
</script>

<template>
    <footer class="flex flex-row content-center bg-zinc-700">
        <img
            @click="$router.push({name: 'Main'})"
            src="../../assets/logo.svg"
            alt="logo"
            class="p-4">
    </footer>
</template>

<style scoped>

</style>