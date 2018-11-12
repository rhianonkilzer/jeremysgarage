<template>
  <main id="app">
    <nav id="nav" :class="{filled: $router.currentRoute.name !== 'home'}" @click="scrollToTop()">
      <router-link to="/">Home</router-link>
      <router-link to="/services">Services</router-link>
      <router-link to="/videos">Videos</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
    <router-view />
    <footer class="page-footer">
      <i class="fab fa-facebook-square"></i>
      <i class="fas fa-phone-square"></i>
      <i class="fas fa-envelope-square"></i>

    </footer>
  </main>
</template>

<script>
  import { throttle } from 'lodash';

  export default {
    mounted() {
      window.addEventListener('scroll', throttle(this.updateNavBackground, 100))
      this.$nextTick(() => {
        this.updateNavBackground()
      })
    },
    methods: {
      updateNavBackground() {
        if (window.scrollY > 0) {
          nav.classList.add('filled');
        } else if (this.$router.currentRoute.name === 'home') {
          nav.classList.remove('filled');
        }
      },
      scrollToTop() {
        this.$nextTick(() => {
          window.scrollTo(0, 0);
        })
      }
    }
  }
</script>

<style>
  body::-webkit-scrollbar {
    width: 6px;
    background-color: #fff;
    border-left: 1px solid #e6ecf8;
  }

  body::-webkit-scrollbar-thumb {
    background-color: #293347;
    outline: 1px solid #7f7f7f;
  }

  body::-webkit-scrollbar-track {
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  #app {
    font-family: Roboto, var(--font-family-sans-serif);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #000000;
    margin-left: 0;
    margin-right: 0;
    padding: 0;
  }

  #app>*:last-child {
    padding-top: 3rem;
  }

  #nav {
    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    flex-direction: row;
    justify-content: center;


    width: 100vw;
    color: white;

    transition: background-color 0.35s, border-bottom 0.35s, box-shadow 0.35s;
    pointer-events: none;
    z-index: 999;
  }

  #nav>* {
    pointer-events: all;
  }

  #nav.filled {
    color: black;
    background-color: white;

    /* border-bottom: solid 1px hsl(0, 0%, 80%); */
    box-shadow: 0 2px 4px rgba(0, 0, 0, .15);
  }

  #nav>.title {
    margin: auto auto auto 1rem;

    font-weight: bold;
    letter-spacing: 1px;
    word-spacing: 2px;
  }

  #nav>a {
    position: relative;

    margin: 0.5rem;
    padding: 0 0.6rem;
    color: inherit;

    text-decoration: none;

    border-radius: 2px;

    transition: background-color 0.2s, color 0.2s;
    user-select: none;
  }

  #nav>a:hover,
  #nav>a:active,
  #nav>a.router-link-exact-active {
    color: hsl(200, 100%, 10%);
    background-color: hsl(200, 100%, 90%);
  }

  #nav>a.router-link-exact-active {
    cursor: default;
  }
</style>