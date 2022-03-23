<script>
    import MenuIcon from 'vue-material-design-icons/Menu.vue';
    export default {
        name: 'Header',
        components: {
            MenuIcon
        }
    };
</script>

<template>
    <header class="flex flex-row content-center bg-zinc-700">
        <img
            src="../../assets/logo.svg"
            alt="logo"
            class="p-4">
        <menu-icon
            :size="36"
            class="py-4"
            fillColor="#FFFFFF"/>
    </header>
</template>

<style scoped>

</style>