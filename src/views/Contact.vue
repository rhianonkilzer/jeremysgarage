<template>
  <!-- this page will be for contact information, map/location, and a link to contact form -->
  <div class="contact">
    <section class="location">
      <article class="hours-of-operation">
        <h2 class='title'>Hours of Operation</h2>
        <ul class='hours-list'>
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
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .hours-of-operation {
    margin-right: 1.5rem;
  }

  .hours-of-operation > .title {
    font-size: 1.5rem;
    text-align: right;
  }

  .hours-list {
    list-style: none;
    padding: 0;
    text-align: right;
  }
</style>
