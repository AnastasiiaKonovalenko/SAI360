<script>
    import TheWelcome from '@/components/TheWelcome.vue';
    import { mapMutations, mapState } from 'vuex';

    export default {
        components: {
            TheWelcome
        },
        data() {
            return {}
        },
        computed: {
            ...mapState(['count'])
        },
        methods: {
            ...mapMutations(['increment'])
        }
    }
</script>

<template>
  <main>
      {{ count }}
      <button @click="increment">hgvjhg</button>
    <TheWelcome />
  </main>
</template>
