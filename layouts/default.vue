<template>
  <nuxt class="default-layout" />
</template>

<style>
/* fonts */
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC:100,400,700&display=fallback&subset=chinese-traditional');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap');
@import url('https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,700,700i&display=swap&subset=latin-ext');
</style>

<style>
body {
  font-family: 'Nunito', Roboto, 'Noto Sans TC', 'Source Sans Pro',
    -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  overflow: hidden;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;

  user-select: none;
}

span,
label {
  vertical-align: middle;
}

@keyframes breathing {
  0% {
    opacity: 0.1;
  }
  60% {
    opacity: 1;
  }
  100% {
    opacity: 0.1;
  }
}
</style>

<style lang="postcss">
.scrollbar {
  scrollbar-color: #80808040 transparent;
  scrollbar-width: thin;

  &:hover {
    scrollbar-color: #80808080 transparent;
  }

  &::-webkit-scrollbar-button {
    @apply w-0 h-0;
  }

  &::-webkit-scrollbar {
    background: transparent;
    @apply bg-transparent;

    @apply w-3 h-3;
  }

  &::-webkit-scrollbar-thumb {
    @apply rounded-full;
    @apply border-solid border-transparent;
    @apply bg-black bg-opacity-25;

    @apply shadow-inner;

    min-height: 40px;
    background-clip: padding-box;
  }

  &::-webkit-scrollbar-track {
    @apply border-solid border-transparent;

    background-clip: padding-box;
  }
}
</style>

<style lang="postcss" scoped>
.default-layout {
  @apply h-screen w-screen flex justify-center items-center text-center overflow-hidden;
}
</style>
