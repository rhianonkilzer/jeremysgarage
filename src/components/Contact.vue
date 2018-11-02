<template>
  <div class="contact">

    <h3>Hours of Operation</h3>

    <p>Monday through Friday: 8 AM - 5 PM
    </p>
    <p>Saturday: by appointment only</p>
    <p>Sundays: Closed</p>
    <div class="mapouter">
      <div class="gmap_canvas"><iframe width="623" height="443" id="gmap_canvas" src="https://maps.google.com/maps?q=Jeremys%20garage&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.pureblack.de"></a></div>

    </div>
    <!-- this page will be for contact information, map/location, and a contact form -->


  </div>
</template>

<script>
  export default {
    name: 'Contact',

  }
</script>

<style scoped>
  .mapouter {
    text-align: right;
    height: 443px;
    width: 623px;
  }

  .gmap_canvas {
    overflow: hidden;
    background: none !important;
    height: 443px;
    width: 623px;
  }
</style>