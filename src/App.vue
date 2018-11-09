<template>
  <div id="app">
    <div class="banner-div" style="width: 200px; position: relative;">
      <img id="banner-img" style="position: relative;" src="./assets/banner.png" alt="banner" />
      <img id="title-img" style="position: absolute; top: 50px; left: 50px;" src="./assets/Jeremy's Garage1.png" alt="title" />
    </div>
    <!-- <img alt="Banner" src="./assets/banner.png">
    <img class="title" alt="jeremysgarage" src="./assets/Jeremy's Garage.png"> -->

    <nav class="navbar">
      <a href="#/home">Home</a>
      <a href="#/services">Services</a>
      <a href="#/about">About</a>
      <a href="#/videos">Videos</a>
      <a href="#/contact">Contact</a>
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

  /* #nav {
    padding: 30px;
    text-align: center;
  }

  #nav a {
    font-weight: bold;
    color: #000000a4;
  }

  #nav a.router-link-exact-active {
    color: #47aeb8;
  }  */


  .navbar {
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.884);
    position: fixed;
    top: 0;
    width: 100%;
  }

  .navbar a {
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 15px;
  }

  .navbar a:hover {
    background: rgba(46, 158, 192, 0.212);
    color: rgb(255, 255, 255);
    border-radius: 15px;
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
