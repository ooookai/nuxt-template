<template>
  <div class="app">
    <nuxt class="content" />
    <div class="nav">
      <router-link
        v-for="([icon, text], link) in nav"
        :key="link"
        class="nav-item animated slideInUp faster"
        tag="div"
        :to="link"
      >
        <fa-icon :icon="icon" class="icon" />
        <span class="text"> {{ text }} </span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    //
  },
  data() {
    return {
      nav: {
        '/app/search': ['search', 'Search'],
        '/app/main': ['calendar-alt', 'Main'],
        '/app/setting': ['igloo', 'Setting'],
      },
    }
  },

  mounted() {},
  methods: {},
}
</script>

<style lang="postcss" scoped>
.app {
  @apply w-screen h-screen overflow-hidden;

  --nav-h: 3.5rem;
}

.content {
  @apply w-screen absolute top-0;
  @apply overflow-hidden;

  height: calc(100vh - var(--nav-h));
}

.nav {
  @apply flex absolute bottom-0 w-screen;
  @apply bg-gray-100 pt-1 px-8;
  height: var(--nav-h);

  &-item {
    @apply flex-1 text-center cursor-pointer;
    @apply flex flex-col justify-center items-center;

    & .icon {
      @apply text-lg;
    }

    & .text {
      @apply mt-1;
      font-size: 0.65rem;
    }

    &.nuxt-link-exact-active {
      @apply text-teal-400;

      & .icon {
        @apply text-xl;
      }

      & .text {
        @apply text-xs;
      }
    }
  }
}
</style>
