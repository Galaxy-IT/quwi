import headerContent from "~/services/header";
import { appURL } from '~/config/systemConfig'

export  const state = () => ({
  token: null
})

export const mutations = {
  setToken(state, token) {
    state.token = token
  },

  clearToken(state) {
    state.token = null
  }
}

export const actions = {
  async login({commit, dispatch}, formData) {
    const requestOptions = {
      method: 'POST',
      headers: headerContent(),
      body:  JSON.stringify(formData),
      redirect: 'follow'
    };
    await fetch(`${appURL}/auth/login`, requestOptions)
      .then(response => response.json())
      .then(result => {
        const token = result.token
        window.$nuxt.$cookies.set('token', token)
        if(token) {
          this.$router.push("/")
        }
        commit('setToken', token)
      })
      .catch(e => {
        console.log(e);
      })
    },

  logout({commit}) {
    window.$nuxt.$cookies.remove('token')
    commit('clearToken')
  },
}

export const getters = {
  token: state => state.token
}
