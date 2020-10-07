<template>
<nav class="navbar">
  <form class="navbar__search">
    <button class="navbar__search-button">
    </button>
    <input class="navbar__search-input" type="text" role="search" placeholder="Поиск..."/>
  </form>
  <ul class="navbar__menu">
    <li class="navbar__menu-item navbar__menu-tv">
      <a class="navbar__menu-link">
      </a>
    </li>
    <li class="navbar__menu-item navbar__menu-radio">
      <a class="navbar__menu-link">
      </a>
    </li>
    <li class="navbar__menu-item navbar__menu-bell">
      <a class="navbar__menu-link">
      </a>
    </li>
    <li class="navbar__menu-item navbar__menu-user">
      <a class="navbar__menu-link">
      </a>
      <div class="navbar__menu-userinfo">
        <p class="navbar__menu-username">User</p>
        <p class="navbar__menu-userstatus">Premium</p>
      </div>
    </li>
  </ul>
</nav>
</template>

<style scoped lang="less">
@import '../assets/styles/mixins.less';

.navbar {
  width: 80vw;
  height: 70px;
  display: flex;
  &__search {
    display: flex;
    width: 20vw;
    padding: 15px 2px;
    &-button  {
      display: block;
      margin: 0;
      margin-right: 10px;
      margin-top: 10px;
      border: none;
      background-color: transparent;
      background-repeat: no-repeat;
      background-position: center 0;
      background-image:url('../assets/images/search.svg');
      width: 22px;
      height: 22px;
    }
    &-input {
      display: block;
      width: 250px;
      margin: 0;
      border: none;
      background-color: transparent;
      font-family: Noto Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      color: #000000;
      padding-top: 2px;
      vertical-align: middle;
      mix-blend-mode: normal;
      opacity: 0.5;
      outline: none;
    }
  }
  &__menu {
    display: flex;
    &-item {
      position: relative;
      width: 100px;
      height: 70px;
      border-left: 1px solid #eeeeee;
      border-right: 1px solid #eeeeee;
      padding: 20px;
      padding-left: 40px;
      list-style:none;
    }
    &-link {
      position: relative;
      width: 20px;
      height: 70px;
      margin: 0 auto;
    }
    &-tv {
      .icon('../images/tv.svg', 45px, 45px, 20px, 15px)
    }
    &-radio {
      .icon('../images/radio.svg', 45px, 45px, 20px, 15px)
    }
    &-bell {
      .icon('../images/bell.svg', 45px, 45px, 20px, 15px)
    }
    &-user {
      .icon('../images/user.svg', 45px, 45px, 20px, 15px);
      border-right: none;
    }
    &-userinfo {
      margin-left: 40px;
      position: relative;
      .icon('../images/premium.svg', 16px, 16px, -5px, 15px);
      &:after {
        top: 15px;
        left: -5px;
      }
    }
    &-username {
      font-family: Noto Sans;
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      line-height: 16px;
      color: #000000;
    }
    &-userstatus {
      font-family: Noto Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 10px;
      line-height: 16px;
      align-items: center;
      color: #E38D0C;
      margin-left: 10px;
    }
  }
}
</style>
