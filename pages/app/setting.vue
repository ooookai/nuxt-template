<template>
  <div>
    <h3>user</h3>
    <p>{{ user }}</p>

    <button @click="signout">Sign Out</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('auth', ['user']),
  },
  methods: {
    signout() {
      this.$store
        .dispatch('auth/signout')
        .then(() => this.$message.info('signout succeeded!'))
        .catch(err => this.$message.error(err.message))
    },
  },
}
</script>
