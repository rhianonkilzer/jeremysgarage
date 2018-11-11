<template>
  <div class="home">
    <header class="hero">
      <div class='hero-content'>
        <!-- <img class="title" src="../assets/Jeremy's Garage1.png" /> -->
        <h1 class='title'>Jeremy's Garage</h1>
        <h2 class='subtitle'>Lorem ipsum dolor sit amet consectet adipisicing elit, sed do eiusmod at al do.</h2>
        <button class='action filled cta'>Lorem ipsum</button>
        <button class='action outline'>Dolor sit amet</button>
      </div>
    </header>

    <!-- Fake Content below -->
    <section>
      <h1>Lorem Ipsum Dolor</h1>
      <article>
        <div></div>
        <h2>Lorem</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
      </article>
      <article>
        <div></div>
        <h2>Ipsum</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
      </article>
      <article>
        <div></div>
        <h2>Dolor</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
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

  .hero-content > .title {
    margin-bottom: 3rem;

    color: transparent;
    -webkit-text-stroke: 1px white;

    font-size: 3.5rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    /* text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2); */
  }

  .hero-content > .subtitle {
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

  section > h1 {
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

  article > div {
    width: 5rem;
    height: 5rem;
    margin-bottom: 1.5rem;

    background-color: hsl(0, 0%, 75%);

    border-radius: 50%;
  }

  article > p {
    color: #444;
  }
</style>
