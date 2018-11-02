<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

  </div>
</template>

<script>
  // @ is an alias to /src
  import Contact from '@/components/Contact.vue'

  export default {
    name: 'home',
    components: {
      Contact
    }
  }
</script>