export const state = () => ({
  user: null,
})

export const getters = {
  // getters
  uid(state) {
    return state.user && state.user.uid
  },
}

export const mutations = {
  SET_USER: (state, user) => {
    const userData = user && {
      ...user,
    }

    state.user = userData
  },
}

export const actions = {
  signin({ commit }, { email, password }) {
    const user = {
      uid: 'uniquie_id_abc',
      fullname: 'Gary',
      email,
      babies: [
        {
          birthday: 1543593600000,
          name: 'BabyA',
        },
      ],
    }

    console.log(`User ${user.uid} Signed In`)

    return new Promise(resolve => {
      setTimeout(() => {
        if (user) commit('SET_USER', user)
        resolve(user)
      }, 500)
    })
  },
  signout({ commit }) {
    return new Promise(resolve => {
      setTimeout(() => {
        commit('SET_USER', null)
        resolve(null)
      }, 1500)
    })
  },
  check({ commit, state }) {
    return new Promise(resolve => {
      if (state.user) return resolve(true)
      else return resolve(false)
    })
  },
}
