<template>
  <div class="home">
    <header class="hero">
      <img class="title" src="../assets/Jeremy's Garage1.png" />
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
    height: 100vh;
    max-height: 35rem;

    /* background-image: url("../assets/banner.png"); */
    /* background-image: url("../assets/garage.jpg"); */
    background-image: url("https://ak7.picdn.net/shutterstock/videos/13494197/thumb/1.jpg");
    background-position: left;
    background-size: cover;

    background-color: rgba(0, 0, 0, 0.5);
    background-blend-mode: color;
  }

  .hero > .title {
    position: absolute;
    top: 1rem;
    left: 50%;

    max-width: calc(100% - 2rem);
    max-height: calc(100% - 4rem);

    transform: translateX(-50%);
    filter: grayscale(1);
    filter: brightness(400%);
  }

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

  article > h2 {
  }

  article > p {
    /* text-align: justify; */
    color: #444;
  }
</style>
