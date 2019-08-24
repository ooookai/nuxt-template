<template>
  <nuxt id="default-layout" />
</template>

<style>
/* fonts */
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC:100,400,700&display=fallback&subset=chinese-traditional');
</style>

<style>
body {
  font-family: 'Noto Sans TC', 'Source Sans Pro', -apple-system,
    BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
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
}

i.anticon,
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

<style lang="postcss" scoped>
#default-layout {
  @apply h-screen w-screen flex justify-center items-center text-center overflow-hidden;
}
</style>
