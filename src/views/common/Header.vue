<script>
    import PlusBoxIcon from 'vue-material-design-icons/PlusBox.vue';
    export default {
        name: 'Header',
        components: {
            PlusBoxIcon
        }
    };
</script>

<template>
    <header class="flex flex-row content-center bg-zinc-700">
        <img
            @click="$router.push({name: 'Main'})"
            src="../../assets/logo.svg"
            alt="logo"
            class="p-4">
        <plus-box-icon
            v-if="$route.name === 'Main'"
            :size="36"
            class="py-4"
            fillColor="#FFFFFF"
            @click="$emit('open-film-dialog')"/>
    </header>
</template>

<style scoped>

</style>