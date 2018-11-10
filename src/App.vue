<template>
  <div id="app">
    <nav id="nav" :class="{filled: $router.currentRoute.name !== 'home'}">
      <!-- <router-link tag='p' to='/' class='title'>Jeremy's Garage</router-link> -->
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

<script>
export default {
  mounted() {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        nav.classList.add('filled')
      } else if (this.$router.currentRoute.name === 'home') {
        nav.classList.remove('filled')
      }
    })
  }
}
</script>

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

  #app > *:last-child {
    padding-top: 3rem;
  }

  #nav {
    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    flex-direction: row;
    justify-content: center;


    width: 100%;
    color: white;

    transition: background-color 0.2s;
    z-index: 999;
  }

  #nav.filled {
    background-color: white;
    color: black;
  }

  #nav > .title {
    margin: auto auto auto 1rem;

    font-weight: bold;
    letter-spacing: 1px;
    word-spacing: 2px;
  }

  #nav > a {
    position: relative;

    margin: 0.5rem;
    padding: 0 0.4rem;
    color: inherit;

    font-size: 1rem;
    font-family: Roboto;
    text-decoration: none;

    border-radius: 2px;

    transition: background-color 0.2s, color 0.2s;
  }

  #nav > a:hover,
  #nav > a:active {
    background-color: hsla(201, 100%, 70%, 0.5);
  }

  #nav > a.router-link-exact-active {
    background-color: hsla(201, 100%, 70%, 0.75);
  }
</style>
