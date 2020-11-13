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
      state.releases = [...state.releases, ...data]
    },
    setRepos(state, data) {
      state.repos = data
    },
    clearReleases(state) {
      state.releases = []
    }
  },
  actions: {
    FETCH_RELEASES({commit}, {userName, repoName, page, per_page}) {
      Axios.get(`https://api.github.com/repos/${userName}/${repoName}/releases?page=${page}&per_page=${per_page}`)
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
