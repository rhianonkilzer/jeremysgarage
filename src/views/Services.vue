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
</style>
