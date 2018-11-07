<template>
  <div class="contact col-12">

    <h3>Hours of Operation</h3>
    <ul style="list-style-type:none">
      <li>Monday through Friday: 8 AM - 5 PM</li>
      <li>Saturday: by appointment only</li>
      <li>Sundays: Closed</li>
    </ul>





    <div class="mapouter">
      <div class="gmap_canvas"><iframe width="850" height="600" id="gmap_canvas" src="https://maps.google.com/maps?q=Jeremys%20garage&t=&z=13&ie=UTF8&iwloc=&output=embed"
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
  }

  .gmap_canvas {
    overflow: hidden;
    background: none !important;
  }
</style>