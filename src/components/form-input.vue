<template>
  <div
    class="form-input"
    :class="{ isTextarea, isFilled }"
  >
    <input
      v-if="!isTextarea"
      class="input"
      :id="id"
      :placeholder="placeholder"
      :name="name"
      :type="type"
      :required="required"
      @input="updateValue"
    />
    <textarea
      v-else
      class="input"
      :id="id"
      :placeholder="placeholder"
      :name="name"
      :required="required"
      @input="updateValue"
    />
    <label :for="id">{{label}}</label>
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
      type: String,
      required: Boolean
    },
    data() {
      return {
        id: idCounter++,
        value: ''
      };
    },
    computed: {
      isTextarea() {
        return this.$props.type === 'textarea';
      },
      isFilled() {
        return this.value !== '';
      }
    },
    methods: {
      updateValue(event) {
        this.value = event.target.value;
      }
    },
    components: {}
  }
</script>


<style scoped>
  .form-input {
    position: relative;

    display: inline-block;
    margin: 1rem;
  }

  .form-input > label {
    position: absolute;
    top: 50%;
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

  .form-input.isTextarea > label {
    top: 1rem;
  }

  .form-input > .input {
    width: 15rem;
    padding: 0.2rem;
    padding-left: calc(4.76% + 0.2rem);

    background-color: #cceeff;

    border: none;
    border-radius: 2px;

    transition: background-color 0.2s;
  }

  .form-input > textarea.input {
    resize: none;
  }

  .form-input > .input:focus {
    background-color: hsl(200, 73%, 81%);
  }

  .form-input.isFilled > .input:invalid {
    background-color: hsl(0, 71%, 81%);
  }

  .form-input > .input:focus + label,
  .form-input.isFilled > label {
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
