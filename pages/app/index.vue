<template>
  <div></div>
</template>

<script>
export default {
  fetch({ store, redirect }) {
    const user = store.state.auth.user
    console.log('app/index fetch', { user })
    redirect('/app/main')
  },
}
</script>
