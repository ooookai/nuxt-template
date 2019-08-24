<template>
  <nuxt-child />
</template>

<script>
export default {
  layout: 'app',
  middleware: 'auth',
  watch: {
    $route() {
      console.log('$route', this.$route)
    },
  },

  created() {
    //
  },
  methods: {
    //
  },
}
</script>
