<template>
  <div class="form-input" :class="{ isTextarea, isFilled }">
    <input v-if="!isTextarea" class="input" :id="id" :placeholder="placeholder" :name="name" :type="type"
      :required="required" @input="updateValue" />
    <textarea v-else class="input" :id="id" :placeholder="placeholder" :name="name" :required="required"
      @input="updateValue" />
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
  }

  .form-input > label {
    position: absolute;
    top: 50%;
    left: 4.76%;
    right: 0%;
    bottom: 0%;

    display: table;

    color: #dadadae7;
    line-height: 100%;

    transform: translateY(-50%);
    transition: top 0.2s, font-size 0.2s;
  }

  .form-input.isTextarea > label {
    top: 1rem;
  }

  .form-input > .input {
    width: 100%;
    height: 100%;
    padding: 0.3rem;
    padding-left: calc(4.76% + 0.3rem);

    background-color: #00afa1ef;

    border: none;
    border-radius: 2px;

    transition: background-color 0.2s;
  }

  .form-input > textarea.input {
    resize: none;
  }

  .form-input > .input:focus {
    background-color: hsl(0, 0%, 46%);
    color: rgba(218, 218, 218, 0.938);
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
    color: #d1d1d1;
    opacity: 0;
    transition: opacity 0.2s;
  }
</style>
