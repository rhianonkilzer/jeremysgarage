<template>
  <div class="home">
    <header class="hero">
      <div class='hero-content'>
        <h1 class='title'>Other Corner Publishing</h1>
        <h2 class='subtitle'>Serving the Treasure Valley area.</h2>
        <button class='schedule-button' @click="toggleOpen"><strong>Request A Quote</strong></button>
        <!-- <button class='action outline'>Dolor sit amet</button> -->
      </div>
    </header>


    <section class="about">
      <h1>About Other Corner</h1>
      <article>
        <img class="about-icon" src="../assets/toolbox-solid.svg" alt="Tools" />
        <h2>Programs We Use</h2>
        <p>
          We design our website templates using Javascript, HTML, & CSS languages to create professional platforms for
          our clients. Click Request A Quote above to reach out to us today for more information about how we can help
          you design the perfect site for your needs.
        </p>
      </article>
      <article>
        <img class="about-icon" src="../assets/building-solid.svg" alt="About" />
        <h2>Our Company</h2>
        <p>
          The <strong>Other Corner Publishing</strong> team is a group of Freelance Web Designers and Front End
          Developers from Idaho, currently serving the Treasure valley area and beyond.
        </p>
      </article>
      <article>
        <img class="about-icon" src="../assets/wrench-solid.svg" alt="Wrench" />
        <h2>Website Services</h2>
        <p>
          Offering designs with both the desktop user, and Mobile user in mind to make your website more user
          friendly for all customers.
          Designing Front-End functionality for your customers to easily contact or inquire your services using your
          platform.
          <br>We offer <strong>free</strong> consults to help you with what best suits your
          business
          needs.

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
    background-image: linear-gradient(to bottom right, rgba(0, 0, 0, 0.692), transparent), url("../assets/woodtexture2.jpeg");
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

  .schedule-button:hover {
    cursor: pointer;
    transition: 0.2s;
  }

  .schedule-button::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
    background-color: rgb(20, 80, 70);
    opacity: 0;
    transition: opacity 0.2s;
    border-radius: 18px;
  }

  .schedule-button:hover::after {
    opacity: 0.25;
  }

  .schedule-button:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(1, 197, 148, 0.602);
  }


  .schedule-button {
    position: relative;
    border-radius: 8px;
    border: none;
    padding: calc(0.4rem + 1px) calc(1.25rem + 1px);

    color: hsl(170, 86%, 28%);
    background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
  }

  .action.outline {
    color: white;
    background: none;
    border: solid 1px hsl(202, 14%, 36%);
  }

  /* Fake-content */
  section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    padding: 6rem;
  }

  section>h1 {
    width: 100%;
    margin-bottom: 2rem;

    color: rgba(0, 0, 0, 0.753);
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
    filter: drop-shadow(2px 3px 3px rgba(0, 0, 0, 0.2));
  }

  .about h2 {
    text-align: center;
    color: rgba(0, 0, 0, 0.849);

  }

  .about p {
    text-align: justify;
    color: #444;
  }
</style>
