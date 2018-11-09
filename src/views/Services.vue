<template>
  <div class="services">
    <h1 class="title">Services offered</h1>
    <ul class="services-list">
      <li>Brakes - Brake Repair</li>
      <li>Drive Train</li>
      <li>Engine Overhaul</li>
      <li>Scheduled Maintenance</li>
      <li>Tune Ups</li>
      <li>No Start - No Run issues</li>
      <li>Bearings</li>
      <li>Clutches</li>
      <li>Emissions Repair</li>
      <li>Major Engine Repair</li>
      <li>Timing Belts and Chains</li>
      <li>Transmissions</li>
      <li>Pre Purchase Inspections</li>
      <li>Alternators</li>
      <li>Cooling Repair</li>
      <li>Electrical</li>
      <li>Starters</li>
      <li>Water Pumps</li>
      <li>Oil Changes</li>
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

    font-family: 'Roboto', sans-serif;
  }

  .services > .title {
    margin-bottom: 2rem;
  }

  .services-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, 225px);
    grid-column-gap: 1rem;
    justify-content: center;

    width: 55rem;
    max-width: 100%;
    margin: 0;
    padding: 0;

    list-style: none;
  }

  .services-list > li {
    position: relative;

    display: flex;
    align-items: center;
    margin-bottom: 0.25rem;

    /* Space for the checkmark */
    padding-left: 1.65rem;

    white-space: nowrap;
  }

  /* Checkmark styling below ↓ */
  .services-list > li::before,
  .services-list > li::after {
    content: '';

    position: absolute;
    left: 0;
    top: 50%;
  }

  /* The circle */
  .services-list > li::before {
    width: 1.25rem;
    height: 1.25rem;

    background-color: rgba(50, 150, 255);
    border-radius: 50%;

    transform: translateY(-50%);
  }

  /* The checkmark */
  .services-list > li::after {
    width: 0.65rem;
    height: 0.35rem;

    border-left: solid 1px white;
    border-bottom: solid 1px white;

    transform: translate(0.3rem, calc(-50% - 0.05rem)) rotate(-45deg);
  }
</style>
