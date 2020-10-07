<template>
<section class="tracks">
  <h2 class="tracks__header">Плейлист
    <span class="tracks__header-playlist">

    </span>
  </h2>
  <table class="tracks__list">
    <tr class="tracks__list-caption">
      <td class="tracks__list-cell tracks__list-header"
        colspan="2">
        #
      </td>
      <td class="tracks__list-cell tracks__list-header">
        Трек
      </td>
      <td class="tracks__list-cell tracks__list-header">
        Исполнитель
      </td>
      <td class="tracks__list-cell tracks__list-header">
        Проигрование
      </td>
      <td class="tracks__list-cell tracks__list-header">
        Время
      </td>
      <td class="tracks__list-cell tracks__list-header"
        colspan="3">
        Опции
      </td>
    </tr>
    <tbody v-for="(t,k) in tracks"
    :key="k"
    :class="(activetrack==t.id)?('tracks__list-item tracks__list-border'):('tracks__list-item')">
    <tr>
      <td class="tracks__list-cell tracks__list-index">
        <span class="tracks__list-playflag" v-if="activetrack==t.id">
          <img src="../assets/images/play.svg" alt="play"/>
        </span>
        <span class="tracks__list-stopflag" v-else>
          {{k+1}}
        </span>
      </td>
      <td class="tracks__list-cell">
        <button class="tracks__list-like">
          <img src="../assets/images/favorite.svg" alt="like"/>
        </button>
      </td>
      <td class="tracks__list-cell tracks__list-title">
        <p>{{t.title}}</p></td>
      <td class="tracks__list-cell tracks__list-author">
        <p>{{t.songer}}</p></td>
      <td class="tracks__list-cell tracks__list-playcounter">
        <p>{{t.playcounter}}</p></td>
      <td class="tracks__list-cell tracks__list-time">
        <p>{{t.time}}</p></td>
      <td class="tracks__list-cell">
        <button class="tracks__list-like">
          <img src="../assets/images/download.svg" alt="download"/>
        </button>
      </td>
      <td class="tracks__list-cell">
        <button class="tracks__list-like">
          <img src="../assets/images/repost.svg" alt="repost"/>
        </button>
      </td>
      <td class="tracks__list-cell">
        <button class="tracks__list-like">
          <img src="../assets/images/dot.svg" alt="dot"/>
        </button>
      </td>
    </tr>
  </tbody>
  </table>
</section>
</template>
<style scoped lang="less">
@import '../assets/styles/mixins.less';
.tracks {
  margin: 0;
  padding: 0;
  &__header {
    font-family: Noto Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    color: #0F1E36;
    text-align: left;
    margin: 25px 0;
    &-playlist {
      font-weight: bold;
    }
  }
  &__list {
    margin: 0;
    padding: 0;
    &-item {
      position: relative;
      margin: 0;
      padding: 15px;
      font-family: Noto Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 16px;
      color: #0F1E36;
      mix-blend-mode: normal;
      opacity: 0.5;
      text-align: left;
    }
    &-cell {
      padding: 15px 20px;
      height: 20px;
    }
    &-playflag {
      padding: 5px;
    }
    &-stopflag {
      padding: 5px;
      text-align: left;
    }
    &-like {
      width: 20px;
      text-align: left;
      background-color: transparent;
      border: none;
    }
    &-border {
      box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
      border-radius: 3px;
    }
    &-title, &-songer {
      width: 250px;
    }
    &-playcounter {
      width: 100px;
    }
    &-header {
      text-align: left;
      font-weight: bold;
    }
  }
}
</style>
<script>
export default {
  props: {
    tracks: {
      required: true,
      type: Array
    }
  },
  data () {
    return {
      //tracks: [],
      playlist: 'Dance',
      activetrack: -1
    }
  }/*,
  created () {
    this.tracks = this.$store.getters.tracks;
    this.playlist = this.$store.getters.playlist.name;
    this.activetrack = this.$store.state.activetrack;
  },
  updated () {
    this.tracks = this.$store.getters.tracks;
    this.playlist = this.$store.getters.playlist;
    this.activetrack = this.$store.state.activetrack;
  }*/
}
</script>
