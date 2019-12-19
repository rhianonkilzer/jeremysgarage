<template>
  <div class="services">
    <h1 class="title">Services We Offer</h1>
    <ul class="services-list">
      <li>Contact Pages</li>
      <li>Functionality for users</li>
      <li>Landing Pages</li>
      <li>About Pages</li>
      <li>Store Platforms</li>
      <li>Easy User Interaction</li>
      <li>Mobile Friendly Designs</li>
      <li>Consults For Further Features</li>
      <li>Consults For Advice</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Services'
  }
</script>

<style scoped>
  .services {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;

    font-family: 'Quicksand', var(--font-family-sans-serif);
  }

  .services>.title {
    margin-top: 2rem;
    margin-bottom: 3rem;

    color: rgba(0, 0, 0, 0.747);
  }

  .services-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, 225px);
    grid-column-gap: 1rem;
    justify-content: space-between;

    width: 55rem;
    max-width: 100%;
    margin: 0;
    padding: 0;

    list-style: none;
  }

  .services-list>li {
    position: relative;

    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;

    /* Space for the checkmark */
    padding-left: 1.65rem;

    white-space: nowrap;
  }

  /* Checkmark styling below ↓ */
  .services-list>li::before,
  .services-list>li::after {
    content: '';

    position: absolute;
    left: 0;
    top: 50%;
  }

  /* The circle */
  .services-list>li::before {
    width: 1.25rem;
    height: 1.25rem;

    background-color: rgb(1, 122, 112);
    border-radius: 50%;

    transform: translateY(-50%);
  }

  /* The checkmark */
  .services-list>li::after {
    width: 0.65rem;
    height: 0.35rem;

    border-left: solid 1px white;
    border-bottom: solid 1px white;

    transform: translate(0.3rem, calc(-50% - 0.05rem)) rotate(-45deg);
  }
</style>
