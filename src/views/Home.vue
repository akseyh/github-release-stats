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
      @click="$store.dispatch('FETCH_RELEASES', {userName: username, repoName: repoName})"
      class="getButton">
      Get the latest release stats
    </vs-button>
    <div class="container-box">
        <card 
          :key="release.id"
          v-for="release in releases"
          :tag_name="release.tag_name"
          :html_url="release.html_url"
          :author="release.author"
          :published_at="release.published_at"/>
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
    ])
  },
  data() {
    return {
      username: '',
      repoName: '',
      page: 1
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
</style>
