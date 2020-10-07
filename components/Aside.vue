<template>
  <aside class="aside">
    <h1 class="aside__logo">
      Music<span class="aside__logo-marker">Club</span>
    </h1>
    <div class="aside__block">
      <ul class="aside__block-list">
        <li class="aside__block-item aside__block-discover">
          <a class="aside__block-link">Обзор</a>
        </li>
        <li class="aside__block-item aside__block-songs">
          <a class="aside__block-link">Треки</a>
        </li>
        <li class="aside__block-item aside__block-alboms">
          <a class="aside__block-link">Альбомы</a>
        </li>
        <li class="aside__block-item aside__block-artist">
          <a class="aside__block-link">Артисты</a>
        </li>
      </ul>
    </div>
    <div class="aside__block">
      <h3 class="aside__block-title">Моя музыка</h3>
      <ul class="aside__block-list">
        <li class="aside__block-item aside__block-favorite">
          <a class="aside__block-link">Понравившееся</a>
        </li>
        <li class="aside__block-item aside__block-history">
          <a class="aside__block-link">История</a>
        </li>
        <li class="aside__block-item aside__block-download">
          <a class="aside__block-link">Загруженное</a>
        </li>
      </ul>
      <h3 class="aside__block-title aside__block-add">Плейлисты</h3>
      <ul class="aside__block-list">
        <li class="aside__block-item aside__block-playlist"
          v-for="(p,k) in playlists" :key="k"  @click="selpl(k)">
          <a class="aside__block-link">{{p.name}}</a>
        </li>
        <!--<li class="aside__block-item aside__block-playlist">
          <a class="aside__block-link">Untitled</a>
        </li>
        <li class="aside__block-item aside__block-playlist">
          <a class="aside__block-link">My Styles</a>
        </li>-->
        <li class="aside__block-item aside__block-playlist"
          v-for="(p,k) in playlistsdata" :key="k"  @click="selpl(k)">
          <a class="aside__block-link">{{p.name}}</a>
        </li>
      </ul>
      <p>{{playlistsdata}}</p>
    </div>
  </aside>
</template>
<script>
export default {
  data () {
    return {
      tracks: [],
      playlists: [],
      playlistsdata: []
    }
  },
  methods: {
    selpl(id) {
      this.$emit('selplaylist', id)
      this.$store.dispatch('selectPlaylist', id)
    }
  },
  created () {
    this.playlists =this.$store.state.playlists;
    this.playlistsdata =this.$store.state.playlistsdata;
    this.tracks = this.$store.state.tracks.filter((t)=>{return t.playlistid==this.$store.state.activeplaylist});
    this.activetrack = this.$store.state.activetrack;
  }
}
</script>
<style scoped lang="less">
@import '../assets/styles/mixins.less';

.aside {
  padding: 20px;
  width: 15vw;
  border-right: 1px solid #EEEEEE;
  &__logo {
    font-family: Noto Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 16px;
    color: #0F1E36;
    margin: 0 27px;
    animation: 1s appear;
    &-marker {
      color: red;
    }
  }
  &__block {
    margin: 35px auto;
    &-list {
      margin: 0;
      padding: 0;
    }
    &-title {
      position: relative;
      margin-bottom: 10px;
    }
    &-discover {
      .icon('../images/discover.svg', 16px, 16px, 10px, 15px)
    }
    &-songs {
      .icon('../images/songs.svg', 16px, 16px, 10px, 15px)
    }
    &-alboms {
      .icon('../images/alboms.svg', 16px, 16px, 10px, 15px)
    }
    &-artist {
      .icon('../images/artist.svg', 16px, 16px, 10px, 15px)
    }
    &-favorite {
      .icon('../images/favorite.svg', 16px, 16px, 10px, 15px)
    }
    &-history {
      .icon('../images/history.svg', 16px, 16px, 10px, 15px)
    }
    &-download {
      .icon('../images/download.svg', 16px, 16px, 10px, 15px)
    }
    &-playlist {
      .icon('../images/playlist.svg', 16px, 16px, 10px, 15px)
    }
    &-add {
      .icon('../images/add.svg', 16px, 16px, 10px, 15px);
      margin-top: 35px;
      &:after {
        left: auto;
        right: -10px;
        top: 5px;
      }
    }
    &-item {
      position: relative;
      list-style: none;
      padding: 10px;
      text-align: left;
    }
    &-link {
      font-family: Noto Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 16px;
      color: #878E9A;
      mix-blend-mode: normal;
      margin-left: 30px;
    }
  }
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
