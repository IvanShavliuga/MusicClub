<template>
  <div class="container">
    <Aside @selplaylist="selpl" />
    <div class="content">
      <Menu/>
      <Tracklist :tracks="tracks"/>
    </div>
  </div>
</template>

<script>
import {getPlaylists} from '../api/index.js'
const axios = require("axios");

const client_id = 'a3aa8fdb1b4446fe9ad5df68e3a77fb9';
const client_secret = '0d9964398b534e909eef74c6f8590263';

export default {
  data () {
    return {
      authflag: 'disconnect',
      pl: [],
      tracks: [],
      plid: 0
    }
  },
  methods: {
    selpl(id) {
      this.tracks = this.$store.getters.tracks;
    }
    /*getPlaylists() {
      return axios({
          method: 'get',
          url: 'https://api.spotify.com/v1/me/playlists',
          headers: { 'Authorization': 'Bearer ' + 'la64n2rmwbr592p4v9ekn7999' }
      });
    },
    async refreshToken() {
        let now = new Date();
        let response = await axios({
            method: 'post',
            url: 'https://accounts.spotify.com/api/token',
            headers: {
                'Authorization': 'Basic ' + 'la64n2rmwbr592p4v9ekn7999',
                'Content-Type': 'application/x-www-form-urlencoded'
             },
            params: {
                grant_type: 'refresh_token',
                refresh_token: this.refresh_token
            }
        });

    }*/
  }/*,
  created () {
    this.tracks = this.$store.getters.tracks;
    //this.playlist = this.$store.getters.playlist.name;
  }*/
}
</script>
<style scoped lang="less">
.logo {
  margin: auto;
  &__title {
    color: purple;
  }
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  text-align: center;
}
.content {
  margin: 0;
  padding: 0;
}
</style>
