<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

  </div>
</template>

<script>
  // @ is an alias to /src
  import Contact from '@/components/Contact.vue'
  import Videos from '@/components/Videos.vue'
  import Services from '@/components/Services.vue'
  import About from '@/components/About.vue'


  export default {
    name: 'home',
    components: {
      Contact,
      About,
      Videos,
      Services
    }
  }
</script>