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
        <li class="aside__block-item aside__block-playlist">
          <a class="aside__block-link">Dance</a>
        </li>
        <li class="aside__block-item aside__block-playlist">
          <a class="aside__block-link">Untitled</a>
        </li>
        <li class="aside__block-item aside__block-playlist">
          <a class="aside__block-link">My Styles</a>
        </li>
      </ul>
    </div>
  </aside>
</template>
<style scoped lang="less">
@import '../assets/styles/mixins.less';

.aside {
  padding: 20px;
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
      .icon('../images/discover.svg')
    }
    &-songs {
      .icon('../images/songs.svg')
    }
    &-alboms {
      .icon('../images/alboms.svg')
    }
    &-artist {
      .icon('../images/artist.svg')
    }
    &-favorite {
      .icon('../images/favorite.svg')
    }
    &-history {
      .icon('../images/history.svg')
    }
    &-download {
      .icon('../images/download.svg')
    }
    &-playlist {
      .icon('../images/playlist.svg')
    }
    &-add {
      .icon('../images/add.svg');
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
