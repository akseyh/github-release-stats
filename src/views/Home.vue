<template>
  <div class="container">
    <div style="display: flex; flex-direction: column; align-items: flex-start;">
      <span>Kullanıcı Adı</span>
      <vs-input 
        placeholder="User Name" 
        v-model="username"
        style="margin-bottom: 10px;"/>
      <span>Repository</span>
      <vs-input 
        placeholder="Repository" 
        v-model="repoName" />
    </div>
    <vs-button
      @click="$store.dispatch('FETCH_RELEASES', {userName: username, repoName: repoName})"
      class="getButton">
      Get the latest release stats
    </vs-button>
    <div class="container-box">
      <div
        :key="release.id"
        v-for="release in releases"
        class="box">
        {{release.tag_name}}
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'Home',
  computed: {
    ...mapState([
      'releases',
      'repos'
    ])
  },
  data() {
    return {
      username: '',
      repoName: ''
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
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  color: white;
}
</style>
