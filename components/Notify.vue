<template>
  <transition name="slide-fade" mode="out-in">
    <div v-show="show" class="notify w-full my-10 pointer-events-none">
      <span class="msg m-4 px-4 py-2 border border-gray-100 shadow-lg">
        {{ msg }}
      </span>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      show: false,
    }
  },
  watch: {
    msg(msg) {
      // console.log('Notify watch', { msg })
      if (msg) this.show = true
      else this.show = false
    },
  },
  mounted() {
    if (this.msg) this.show = true
  },
}
</script>

<style lang="postcss" scoped>
.notify {
  @apply fixed top-0 left-0 z-20;
  @apply bg-white;
}
</style>

<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all 0.1s ease;
}
.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-active {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
