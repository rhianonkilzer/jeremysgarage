<template>
  <div id="app">
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
    color: #125d57;
  }
</style>