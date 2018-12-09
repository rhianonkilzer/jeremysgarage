<template>
  <div class="home">
    <header class="hero">
      <div class='hero-content'>
        <h1 class='title'>Jeremy's Garage</h1>
        <h2 class='subtitle'>A full-service auto repair facility in Nampa, serving the Treasure Valley area.</h2>
        <button class='schedule-button' @click="toggleOpen">Schedule an appointment</button>
        <!-- <button class='action outline'>Dolor sit amet</button> -->
      </div>
    </header>


    <section class="about">
      <h1>About Jeremy's Garage</h1>
      <article>
        <i class="about-icon fas fa-toolbox"></i>
        <h2>Tools & Equipment</h2>
        <p>
          Returning your vehicle in tip-top shape, and keeping it there, is our number one priority. Vehicles
          with complex electrical systems need qualified technicians who understand how to service them. Engines that
          are built for increased power and performance also need Jeremy's Garage to perform quality maintenance. Avoid
          costly repairs when you come to our full-service
          auto repair facility.
        </p>
      </article>
      <article>
        <img class="about-icon" src="../assets/car-gear.svg" alt="car with gear icon" />
        <h2>Cars we service</h2>
        <p>
          We are a family owned business delivering honest and professional automotive repair and auto maintenance
          services. Jeremy's Garage services a variety of vehicles, including newer to older
          Chevrolet, Chrysler, Dodge, Ford, Honda, Lexus, Mazda, Nissan, Subaru, and Toyota models.
        </p>
      </article>
      <article>
        <i class="about-icon fas fa-wrench"></i>
        <h2>Maintenance Services</h2>
        <p>
          Quality auto service is the key to your vehicle’s longevity and peak performance. We understand that life on
          the road can be rough on your vehicle’s engine and components. Even if your vehicle has a simple commute and
          a consistent driving routine, it will require special attention. From bumper-to-bumper we've got you
          covered.
        </p>
      </article>
    </section>
    <contact-form :isOpen="isOpen" :closeForm='toggleOpen'></contact-form>
  </div>
</template>

<script>
  import ContactForm from "../components/contact-form.vue"
  export default {
    data() {
      return {
        isOpen: false
      }
    },
    methods: {
      toggleOpen() {
        this.isOpen = !this.isOpen
      }
    },
    name: 'home',
    components: {
      ContactForm
    }
  }
</script>

<style scoped>
  .home {
    padding-top: 0 !important;
  }

  .hero {
    position: relative;

    width: 100%;
    height: calc(100vh - 6rem);
    max-height: 35rem;
    padding-top: 8rem;

    /* background-image: url("../assets/banner.png"); */
    background-image: linear-gradient(to bottom right, rgba(0, 0, 0, 0.65), transparent), url("../assets/garage.jpg");
    background-position: left;
    background-size: cover;
    box-shadow: 0px 6px 15px 3px #414141c9;
  }

  .hero-content {
    display: block;
    width: fit-content;
    max-width: 35rem;
    margin-left: 4rem;
    margin-right: auto;
  }

  .hero-content>.title {
    margin-bottom: 3rem;

    color: transparent;
    -webkit-text-stroke: 1px white;

    font-size: 3.5rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    /* text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2); */
  }

  .hero-content>.subtitle {
    max-width: 45rem;
    margin-bottom: 1.5rem;

    color: white;

    font-size: 1.8rem;
    font-weight: normal;
  }

  .action {
    padding: 0.4rem 1.25rem;
    margin-right: 1rem;

    border-radius: 19px;
    cursor: pointer;

    transition: background-color 0.2s, border-color 0.2s, color 0.2s, box-shadow 0.2s;
  }

  .action:hover,
  .action:active,
  .action:focus {
    color: hsl(200, 100%, 10%) !important;
    background-color: hsl(200, 100%, 85%) !important;
    border-color: hsl(200, 100%, 85%);
  }

  .action:focus {
    outline: none;
    box-shadow: 0 0 0 4px hsla(200, 100%, 85%, 0.5);
  }

  .action.filled {
    padding: calc(0.4rem + 1px) calc(1.25rem + 1px);
    color: hsl(200, 100%, 15%);
    background: hsl(200, 100%, 90%);
    border: none;
  }

  /* .schedule-button:hover {
    cursor: pointer;
    transition: 0.2s;
    color: black;
    background-color: rgba(156, 192, 233, 0.87);
  } */

  .schedule-button {
    -moz-box-shadow: inset 0px 1px 20px -2px #ffffff;
    -webkit-box-shadow: inset 0px 1px 20px -2px #ffffff;
    box-shadow: inset 0px 1px 20px -2px #ffffff;
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0.05, #d1e5eb), color-stop(1, #69a9e0));
    background: -moz-linear-gradient(top, #d1e5eb 5%, #69a9e0 100%);
    background: -webkit-linear-gradient(top, #d1e5eb 5%, #69a9e0 100%);
    background: -o-linear-gradient(top, #d1e5eb 5%, #69a9e0 100%);
    background: -ms-linear-gradient(top, #d1e5eb 5%, #69a9e0 100%);
    background: linear-gradient(to bottom, #d1e5eb 5%, #69a9e0 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#d1e5eb', endColorstr='#69a9e0', GradientType=0);
    background-color: #d1e5eb;
    -moz-border-radius: 7px;
    -webkit-border-radius: 7px;
    border-radius: 7px;
    border: 1px solid #d6d6d6;
    display: inline-block;
    cursor: pointer;
    color: #ffffff;
    font-size: 16px;
    font-weight: bold;
    padding: 6px 24px;
    text-decoration: none;
    text-shadow: -1px 2px 5px #424242;
  }

  .schedule-button:hover {
    opacity: 1;
    /* background: -webkit-gradient(linear, left top, left bottom, color-stop(0.05, #69a9e0), color-stop(1, #d1e5eb));
    background: -moz-linear-gradient(top, #69a9e0 5%, #d1e5eb 100%);
    background: -webkit-linear-gradient(top, #69a9e0 5%, #d1e5eb 100%);
    background: -o-linear-gradient(top, #69a9e0 5%, #d1e5eb 100%);
    background: -ms-linear-gradient(top, #69a9e0 5%, #d1e5eb 100%);
    background: linear-gradient(to bottom, #69a9e0 5%, #d1e5eb 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#69a9e0', endColorstr='#d1e5eb', GradientType=0);
    background-color: #69a9e0; */
  }

  .schedule-button:active {
    position: relative;
    top: 1px;
  }


  /* .schedule-button {
    text-shadow: 2px 2px 4px #000000;
    background-color: rgba(47, 138, 241, 0.87);
    color: white;

    border-radius: 13px;
    border: none;
    padding: calc(0.4rem + 1px) calc(1.25rem + 1px);

  } */

  /* .action.filled.cta {
    color: rgba(255, 255, 255, 0.753);
    background-color: rgba(110, 210, 235, 0.644);
    text-shadow: 2px 2px 4px #000000;
    background: linear-gradient(to bottom right, hsl(200, 100%, 85%), hsl(345, 100%, 90%));
  } */

  .action.outline {
    color: white;
    background: none;
    border: solid 1px hsl(200, 100%, 85%);
  }

  /* Fake-content */
  section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    padding: 3rem;
  }

  section>h1 {
    width: 100%;
    margin-bottom: 2rem;

    font-weight: bold;
    letter-spacing: 2px;
    text-align: center;
  }

  article {
    display: flex;
    flex-direction: column;
    align-items: center;

    max-width: 20rem;
    margin: 0 1rem 1rem;
  }

  .about-icon {
    width: 5rem;
    height: 5rem;
    margin-bottom: 1.5rem;
    font-size: 4.5rem;
    color: #4783f3;

  }

  .about h2 {
    text-align: center;
  }

  .about p {
    text-align: justify;
    color: #444;
  }
</style>