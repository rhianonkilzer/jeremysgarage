<template>
  <div class="form-input">
    <label :for="id">{{label}}</label>
    <input
      :id="id"
      :placeholder="placeholder"
      :name="name"
      :type="type"
    />
  </div>
</template>

<script>
  let idCounter = 0;

  export default {
    name: 'form-input',
    props: {
      label: String,
      placeholder: String,
      name: String,
      type: String
    },
    data() {
      return {
        id: idCounter++
      };
    },
    computed: {},
    methods: {},
    components: {}
  }
</script>


<style scoped>
  .form-input {
    position: relative;

    display: inline-block;

    padding: 0.2rem;
    margin: 1rem;

    background-color: #cceeff;
    border-radius: 2px;

    transition: background-color 0.2s;
  }

  .form-input > label {
    position: absolute;
    left: 4.76%;
    right: 0%;
    top: 50%;
    bottom: 0%;

    margin: 0;

    color: #002233;
    line-height: 100%;

    transform: translateY(-50%);
    transition: top 0.2s, font-size 0.2s;
  }

  .form-input > input {
    padding-left: 4.76%;
    background: none;
    border: none;
  }

  /* TODO: replace :focus-within with javascript and [focus-within] */
  .form-input:focus-within {
    background-color: #aadaf2;
  }

  .form-input:focus-within > label {
    top: -5%;
    font-size: 0.75rem;
  }

  .form-input > input:focus {
    outline: none;
  }

  .form-input > input:focus::placeholder {
    opacity: 0.5;
  }

  .form-input > input::placeholder {
    color: #002233;
    opacity: 0;
    transition: opacity 0.2s;
  }
</style>
