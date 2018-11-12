<template>
  <!-- this page will be for contact information, map/location, and a contact form -->
  <div class="contact">
    <section class="location">
      <article>
        <h3>Hours of Operation</h3>
        <ul style="list-style-type:none">
          <li>Monday through Friday: 8 AM - 5 PM</li>
          <li>Saturday: by appointment only</li>
          <li>Sundays: Closed</li>
        </ul>
      </article>



      <iframe width="750" height="500" id="gmap_canvas" frameborder="0" scrolling="no" marginwidth="0" marginheight="0"
        src="https://maps.google.com/maps?q=Jeremys%20garage&t=&z=13&ie=UTF8&iwloc=&output=embed">
        <a href="https://www.pureblack.de"></a>
      </iframe>

    </section>



  </div>
</template>

<script>
  export default {
    name: 'Contact'
  }
</script>

<style scoped>
  .location {
    width: 100%;
    display: flex;
  }
</style>