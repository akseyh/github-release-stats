import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import Axios from 'axios'

export default new Vuex.Store({
  state: {
    releases: [],
    repos: []
  },
  mutations: {
    setReleases(state, data) {
      state.releases = data
    },
    setRepos(state, data) {
      state.repos = data
    }
  },
  actions: {
    FETCH_RELEASES({commit}, {userName, repoName}) {
      Axios.get(`https://api.github.com/repos/${userName}/${repoName}/releases`)
        .then(res => {
          if(res.status !== 200) return
          commit('setReleases', res.data)
        })
        .catch(err => {console.error(err)})
    },
    FETCH_REPOS({commit}, userName) {
      Axios.get(`https://api.github.com/users/${userName}/repos`)
        .then(res => {
          if(res.status !== 200) return
          commit('setRepos', res.data)
        })
        .catch(err => {console.error(err)})
    }
  },
  modules: {
  }
})
