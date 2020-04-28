export default function ({ store, redirect }) {
  return store.dispatch('auth/check').then(user => {
    console.log('middleware auth', user)
    if (!user) return redirect('/login')
  })
}
