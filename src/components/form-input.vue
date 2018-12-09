<template>
  <div
    class="form-input"
    :class="{ textarea: isTextarea }"
  >
    <label :for="id">{{label}}</label>
    <input
      v-if="!isTextarea"
      class="input"
      :id="id"
      :placeholder="placeholder"
      :name="name"
      :type="type"
    />
    <textarea
      v-else
      class="input"
      :id="id"
      :placeholder="placeholder"
      :name="name"
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
    computed: {
      isTextarea() {
        return this.$props.type === 'textarea';
      }
    },
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
    bottom: 0%;

    display: table;
    margin: 0;

    color: #002233;
    line-height: 100%;

    transform: translateY(-50%);
    transition: top 0.2s, font-size 0.2s;
  }

  .form-input.textarea > label {
    top: 1rem;
  }

  .form-input > .input {
    padding-left: 4.76%;
    background: none;
    border: none;
  }

  .form-input > textarea.input {
    resize: none;
    width: 100%;
  }

  /* TODO: replace :focus-within with javascript and [focus-within] */
  .form-input:focus-within {
    background-color: #aadaf2;
  }

  .form-input:focus-within > label {
    top: -10px;
    font-size: 0.75rem;
  }

  .form-input > .input:focus {
    outline: none;
  }

  .form-input > .input:focus::placeholder {
    opacity: 0.5;
  }

  .form-input > .input::placeholder {
    color: #002233;
    opacity: 0;
    transition: opacity 0.2s;
  }
</style>
