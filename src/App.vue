<template>
  <div id="app">
    <!-- <div class="banner-div" style="width: 200px; position: relative;">
      <img id="banner-img" style="position: relative;" src="./assets/banner.png" alt="banner" />
      <img id="title-img" style="position: absolute; top: 50px; left: 50px;" src="./assets/Jeremy's Garage1.png" alt="title" />
    </div> -->
    <!-- <img alt="Banner" src="./assets/banner.png">
    <img class="title" alt="jeremysgarage" src="./assets/Jeremy's Garage.png"> -->

    <nav id="nav">
      <router-link tag='p' to='/' class='title'>Jeremy's Garage</router-link>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/services">Services</router-link>
      <router-link to="/videos">Videos</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>

    <!-- <div id="nav"> |
      <router-link to="/">Home</router-link> |
      <router-link to="/services">Services</router-link> |
      <router-link to="/videos">Videos</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/contact">Contact</router-link> |
    </div> -->

    <router-view />
  </div>
</template>

<style>
  #app {
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #000000;
    margin-left: 0;
    margin-right: 0;
    padding: 0;
  }

  #nav {
    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    width: 100%;

    background-color: rgba(0, 0, 0, 0.884);

    z-index: 999;
  }

  #nav > .title {
    margin: auto auto auto 1rem;

    color: #f2f2f2;

    font-weight: bold;
    letter-spacing: 1px;
    word-spacing: 2px;
  }

  #nav > a {
    position: relative;

    padding: 0.5rem 0.85rem;

    color: #f2f2f2;

    font-size: 1rem;
    font-family: Roboto;
    text-decoration: none;

    transition: background-color 0.2s;
  }

  #nav > a::after {
    content: '';

    position: absolute;
    bottom: 0;
    left: 50%;

    width: 0;
    height: 2px;

    /* TODO: Change "lightblue" to the theme-color */
    background-color: lightblue;

    transform: translateX(-50%);
    transition: width 0.2s;
  }

  #nav > a:active,
  #nav > a:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  #nav > a.router-link-exact-active::after {
    width: 100%;
  }

  .main {
    padding: 16px;
    margin-top: 30px;
    height: 1500px;
    /* Used in this example to enable scrolling */
  }

  /* .navbar a:active {
    color: #47aeb8;
  }  */

  #banner-img {
    box-shadow: 0 4px 8px 0 rgba(10, 105, 134, 0.2);
  }

  #title-img {
    height: auto;
  }
</style>
