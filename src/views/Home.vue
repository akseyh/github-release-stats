<template>
  <div class="container">
    <div style="display: flex; flex-direction: column; align-items: flex-start;">
      <span>Username</span>
      <vs-input 
        placeholder="User Name" 
        v-model="username"
        style="margin-bottom: 10px;"/>
      <span>Repository</span>
      <vs-input 
        placeholder="Repository" 
        v-model="repoName"
        v-on:keyup.enter="$refs.fetchReleaseButton.$el.click()"/>
    </div>
    <vs-button
      ref="fetchReleaseButton"
      @click="getReleases"
      class="getButton">
      Get the latest release stats
    </vs-button>
    <div class="container-box">
        <card 
          :key="index"
          v-for="(release, index) in computedReleases"
          :tag_name="release.tag_name"
          :html_url="release.html_url"
          :author="release.author"
          :published_at="release.published_at"
          :pre_release="release.prerelease"/>
    </div>
    <div class="pagination">
      <font-awesome-icon 
        icon="angle-left"
        style="font-size: 50px;"
        :style="{color: page === 1 ? '#B0B4B5' : '#2C3E50', cursor: page === 1 ? '' : 'pointer'}"
        @click="page !== 1 && page--"/>
        <div style="margin-left: 20px; margin-right: 20px;">
          {{page}}
        </div>
      <font-awesome-icon 
        icon="angle-right"
        style="font-size: 50px; cursor: pointer;"
        :style="{color: computedReleases.length !== per_page ? '#B0B4B5' : '#2C3E50', cursor: computedReleases.length !== per_page ? '' : 'pointer'}"
        @click="computedReleases.length === per_page && page++"/>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import card from '@/components/card'
export default {
  name: 'Home',
  components: {card},
  computed: {
    ...mapState([
      'releases',
      'repos'
    ]),
    computedReleases() {
      return this.releases.slice((this.page - 1) * this.per_page, ((this.page - 1) * this.per_page) + this.per_page)
    }
  },
  watch: {
    page(val) {
      if(this.computedReleases.length < this.per_page) {
        this.$store.dispatch('FETCH_RELEASES', {userName: this.username, repoName: this.repoName, page: val, per_page: this.per_page})
      }
    }
  },
  data() {
    return {
      username: '',
      repoName: '',
      page: 1,
      per_page: 30
    }
  },
  methods: {
    getReleases() {
      this.page = 1
      this.$store.commit('clearReleases')
      this.$store.dispatch('FETCH_RELEASES', {userName: this.username, repoName: this.repoName, page: this.page, per_page: this.per_page})
    },
    getPreviousPage() {
      console.log()
    },
    getNextPage() {
      if(!this.releases[this.per_page + 1]) console.log('YENİ SAYFA GELİYORR')
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.getButton {
  margin-top: 25px;
}
.container-box {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding-left: 20px;
  padding-right: 20px;
}
.box {
  width: 200px;
  height: 200px;
  margin: 5px;
  overflow: hidden;
  border-radius: 10px;
  background: gray;
  color: white;
}
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
