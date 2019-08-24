<template>
  <div class="login">
    <div class="goHome" @click="goHome">
      <a-icon class="text-xl p-4" type="arrow-left" />
    </div>
    <div class="form">
      <form @submit.prevent="submit">
        <p class="text-sm mb-2 text-gray-600 text-left">
          <span> What's your member Email </span>
        </p>
        <input
          v-model="email"
          class="input focus:outline-0 focus:shadow-outline"
          type="email"
          placeholder="eXaMpLe@yours.com"
          autofocus="autofocus"
          :disabled="logining"
          @focus="ready = false"
          @blur="ready = true"
        />
        <input
          v-model="password"
          class="input focus:outline-0 focus:shadow-outline"
          type="password"
          placeholder="your password"
          :disabled="logining"
          @focus="ready = false"
          @blur="ready = true"
        />
        <button
          class="submit animated fast"
          :class="{ pulse: email && ready }"
          type="submit"
          value="SignIn"
          :disabled="logining"
        >
          <a-icon v-show="logining" type="loading" class="align-text-bottom" />
          <span>
            Log In
          </span>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      email: '',
      password: '',
      ready: false,
      logining: false,
    }
  },
  computed: {
    ...mapState('auth', ['user']),
  },
  fetch({ store, redirect, query }) {
    return store.dispatch('auth/check').then(user => {
      console.log('login fetch', user)
      if (user) return redirect('/app/', query)
    })
  },
  created() {
    //
  },

  methods: {
    goHome() {
      this.$router.replace({ path: '/' })
    },
    submit() {
      this.login()
    },
    claer() {
      this.email = ''
      this.password = ''
      this.logining = false
    },
    login() {
      const { email, password } = this

      if (!email && !password) {
        return this.$message.info('Please provide your email & password')
      }

      this.logining = true

      this.$store
        .dispatch('auth/signin', { email, password })
        .then(() => {
          this.$message.success('signin succeeded!')
          const query = this.$route.query
          this.$router.replace({ path: '/app/', query })
        })
        .catch(err => {
          this.$message.error(err.message)
          this.claer()
        })
        .finally(() => {
          this.logining = false
        })
    },
  },
}
</script>

<style lang="postcss" scoped>
.login {
  @apply flex justify-center items-center text-center flex-col;
}

.goHome {
  @apply fixed opacity-50 cursor-pointer;

  --d: 10px;
  left: var(--d);
  top: var(--d);
}

.form {
  width: 240px;

  & .input {
    @apply bg-white border border-gray-300 rounded-lg py-2 px-4 block w-full leading-normal;
    @apply my-2;

    &:disabled {
      @apply cursor-text;
    }
  }

  & .submit {
    @apply bg-orange-400 text-white font-bold py-2 px-12 w-full rounded cursor-pointer mt-6;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    &:disabled {
      @apply bg-orange-200 cursor-not-allowed;
    }
  }
}
</style>

<style lang="scss" scoped>
.fadeInOut-enter-active,
.fadeInOut-leave-active {
  transition: opacity 0.25s;
}
.fadeInOut-enter,
.fadeInOut-leave-to {
  opacity: 0;
}
</style>
