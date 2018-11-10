<template>
  <main id="app">
    <nav id="nav" :class="{filled: $router.currentRoute.name !== 'home'}">
      <!-- <router-link tag='p' to='/' class='title'>Jeremy's Garage</router-link> -->
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/services">Services</router-link>
      <router-link to="/videos">Videos</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
    <router-view />
  </main>
</template>

<script>
import { throttle } from 'lodash';

export default {
  mounted() {
    window.addEventListener('scroll', throttle(() => {
      console.log('scroll fired')
      if (window.scrollY > 0) {
        nav.classList.add('filled');
      } else if (this.$router.currentRoute.name === 'home') {
        nav.classList.remove('filled');
      }
    }, 100))
  }
}
</script>

<style>
  /* Define the "system" font family */
  @font-face {
    font-family: system;
    font-style: normal;
    font-weight: 300;
    src: local(".SFNSText-Light"), local(".HelveticaNeueDeskInterface-Light"), local(".LucidaGrandeUI"), local("Ubuntu Light"), local("Segoe UI Light"), local("Roboto-Light"), local("DroidSans"), local("Tahoma");
  }

  #app {
    font-family: system;
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

    transition: background-color 0.35s;
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
