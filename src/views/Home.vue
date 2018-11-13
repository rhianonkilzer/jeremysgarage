<template>
  <div class="home">
    <header class="hero">
      <div class='hero-content'>
        <h1 class='title'>Jeremy's Garage</h1>
        <h2 class='subtitle'>A full-service auto repair facility in Nampa, serving the Treasure Valley area.</h2>
        <button class='action filled cta'>Lorem ipsum</button>
        <button class='action outline'>Dolor sit amet</button>
      </div>
    </header>

    <!-- Fake Content below -->
    <section>
      <h1>About Jeremy's Garage</h1>
      <article>
        <i class="fas fa-toolbox icon"></i>
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
        <img class="icon" src="../assets/car-gear.svg" alt="car with gear icon" />
        <h2>Cars we service</h2>
        <p>
          At Jeremy's Garage we pride ourselves on servicing a variety of vehicles, including newer to older models of
          the following:
          Chevrolet, Chrysler, Dodge, Ford, Honda, Lexus, Mazda, Nissan, Subaru, and Toyota.
        </p>
      </article>
      <article>
        <i class="fas fa-wrench icon"></i>
        <h2>Maintenance Services</h2>
        <p>
          Quality auto service is the key to your vehicle’s longevity and peak performance. We understand that life on
          the road can be rough on your vehicle’s engine and components. Even if your vehicle has a simple commute and
          a consistent driving routine, it will still require special attention. From bumper-to-bumper we've got you
          covered.
        </p>
      </article>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'home'
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

  .action.filled.cta {
    background: linear-gradient(to bottom right, hsl(200, 100%, 85%), hsl(345, 100%, 90%));
  }

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

  article>.icon {
    width: 5rem;
    height: 5rem;
    margin-bottom: 1.5rem;
    font-size: 4.5rem;
  }

  article>h2 {
    text-align: center;
  }

  article>p {
    text-align: justify;
    color: #444;
  }
</style>