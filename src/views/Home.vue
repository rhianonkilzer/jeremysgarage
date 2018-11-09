<template>
  <div class="home">
    <header class="hero">
      <img class="title" src="../assets/Jeremy's Garage1.png" />
    </header>
  </div>
</template>

<script>
  export default {
    name: 'home'
  }
</script>

<style scoped>
  .home {
    padding-top: 0 !important;
  }

  .hero {
    position: relative;

    width: 100%;
    height: 100vh;
    max-height: 35rem;

    background-image: url("../assets/banner.png");
    /* background-image: url("../assets/garage.jpg"); */
    background-position: center;
    background-size: cover;

    background-color: rgba(255, 255, 255, 0.2);
    background-blend-mode: color;
  }

  .hero > .title {
    position: absolute;
    top: 1rem;
    left: 50%;

    max-width: calc(100% - 2rem);
    max-height: calc(100% - 4rem);

    transform: translateX(-50%);
    filter: grayscale(1);
    filter: brightness(400%);
  }
</style>
