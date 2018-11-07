<template>
  <div id="app">
    <div class="banner-div" style="width: 200px; position: relative;">
      <img id="image1" style="position: relative;" src="./assets/banner.png" alt="banner" />
      <img id="image2" style="position: absolute; top: 50px; left: 50px;" src="./assets/Jeremy's Garagewhite.png" alt="title" />
    </div>
    <!-- <img alt="Banner" src="./assets/banner.png">
    <img class="title" alt="jeremysgarage" src="./assets/Jeremy's Garage.png"> -->

    <div id="nav"> |
      <router-link to="/">Home</router-link> |
      <router-link to="/services">Services</router-link> |
      <router-link to="/videos">Videos</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/contact">Contact</router-link> |


    </div>
    <router-view />
  </div>
</template>

<style>
  #app {
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #000000;
  }

  #nav {
    padding: 30px;
    text-align: center;
  }

  #nav a {
    font-weight: bold;
    color: #000000;
  }

  #nav a.router-link-exact-active {
    color: #47aeb8;
  }


  .title {
    height: auto;
    width: 70vh;
  }
</style>