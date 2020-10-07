<template>
  <div class="logo">
    <h1 class="logo__title">Hello</h1>
  </div>
</template>

<style scoped lang="less">
.logo {
  animation: 1s appear;
  margin: auto;
  &__title {
    color: red;
    font-size: 80px;
  }
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
