<template>
  <div class="container">
    <Aside @selplaylist="selpl" />
    <div class="content">
      <Menu/>
      <Tracklist :tracks="tracks"/>
      {{exp}}
    </div>
  </div>
</template>

<script>

const axios = require("axios");

const client_id = 'la64n2rmwbr592p4v9ekn7999';
const client_secret = 'BQDvnh9XXAnvOwz_QomtPoaVEmmCDFUAmYLYH7FIY8GNZA43XROrRMoyLaPQvXLOyIXdlwZ9xd1hoyug1GmwxBJdYUgu9U-eZnhTZ61hB8BL3qt2MywZ7yQLdrtKmk8vwH4JZi6bckOY9GRRuKu3XjoOixL1BGrflN0sSVQHWiSU4E9BkOWSBbkhI2vgLjXYL1nu3PlBn4ArybQQKX_SQx0uCog7eiR-czwsiPfKIV70kaOw1LgMkSOBdw7wE0hTgRj8xGaNOONB_JDCaYHtqKNsObr6TDbuh0U';

export default {
  data () {
    return {
      authflag: 'disconnect',
      pl: [],
      tracks: [],
      plid: 0,
      exp:[]
    }
  },
  methods: {
    selpl(id) {
      this.tracks = this.$store.getters.tracks;
    },
    getPlaylists() {
       this.refreshToken();
      let lt = axios({
          method: 'get',
          url: 'https://api.spotify.com/v1/me/playlists',
          headers: { 'Authorization': 'Bearer ' + client_secret }
      });
      lt.then(response => (this.exp = response.data));
      return this.exp
    },
    async refreshToken() {
    let response = await axios({
        method: 'post',
        url: 'https://accounts.spotify.com/api/token',
        headers: {
            'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')),
            'Content-Type': 'application/x-www-form-urlencoded'
         },
        params: {
            grant_type: 'refresh_token',
            refresh_token: client_secret
        }
    });
  }
  },
  created () {
    this.tracks = this.$store.getters.tracks;
    this.$store.dispatch('initUser');
    this.$store.dispatch('initPlaylist');
    /*this.refreshToken();
    this.exp=this.getPlaylists();

    console.log(this.exp)*/
    //this.playlist = this.$store.getters.playlist.name;
  }
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
