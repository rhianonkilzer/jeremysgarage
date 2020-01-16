<template>
  <!-- this page will be for contact information, map/location, and a link to contact form -->
  <div class="contact">

    <img width="450px" src="../assets/playicon.png" />
    <h1 class="title">Contact Info</h1>
    <section class="location">
      <article class="hours-of-operation">

        <h2 class="title"><i class="fas fa-clock"></i> Hours of Operation</h2>
        <ul class="hours-list">
          <li>
            Call us at <a class="" href="tel:+2089495159">208&#8729;949&#8729;5159</a>
            <br>
            <img width="80px" src="" />
            <a href="mailto:rhianonkilzer@yahoo.com">rhianonkilzer@yahoo.com</a>
          </li>
          <li><a href="https://www.linkedin.com/company/rhianonkilzer" target="_blank"><img src="" /></a></li>
          <li>Monday - Friday by appointment only</li>
          <li>Saturday & Sundays: Closed</li>
        </ul>
      </article>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92456.8474609066!2d-116.30410929736861!3d43.60078456609254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54aef172e947b49d%3A0x9a5b989b36679d9b!2sBoise%2C%20ID!5e0!3m2!1sen!2sus!4v1576730624607!5m2!1sen!2sus"
        width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
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
