<template>
  <!-- this page will be for contact information, map/location, and a link to contact form -->
  <div class="contact">
    <h1 class="title">Contact Info</h1>
    <section class="location">
      <article class="hours-of-operation">

        <h2 class="title"><i class="fas fa-clock"></i> Hours of Operation</h2>
        <ul class="hours-list">
          <li>Monday through Friday: 8 AM - 5 PM</li>
          <li>Saturday: by appointment only</li>
          <li>Sundays: Closed</li>
        </ul>
      </article>

      <iframe class="map" frameborder="0" scrolling="no" marginwidth="0" marginheight="0" src="https://maps.google.com/maps?q=Jeremys%20garage&t=&z=13&ie=UTF8&iwloc=&output=embed">
        <a href="https://www.pureblack.de"></a>
      </iframe>
    </section>
  </div>
</template>

<script>
  export default {
    name: "Contact"
  }
</script>

<style scoped>
  .contact>.title {
    text-align: center;
    margin: 3rem 0;
  }

  .location {
    display: flex;
    justify-content: center;
  }

  .hours-of-operation {
    margin-right: 1.5rem;
  }

  .hours-of-operation>.title {
    font-size: 1.5rem;
    text-align: right;
  }

  .hours-list {
    list-style: none;
    padding: 0;
    text-align: right;
  }

  .map {
    min-width: 20rem;
    max-width: 40rem;
    width: 70%;
    height: 25rem;
  }

  @media (max-width: 999px) {
    .location {
      flex-direction: column;
      align-items: center;
      padding-bottom: 2rem;
    }

    .hours-of-operation {
      margin: 0;
    }

    .hours-of-operation>.title {
      text-align: center;
    }

    .hours-list {
      text-align: center;
    }
  }
</style>