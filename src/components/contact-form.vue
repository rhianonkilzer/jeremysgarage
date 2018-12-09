<template>
  <div
    v-if="isOpen"
    class="contact-form"
  >
    <form
      accept-charset="UTF-8"
      action="https://usebasin.com/f/8345c28386f6"
      method="POST"
    >
      <h1 class="title mb-5">Schedule an Appointment</h1>
      <fieldset>
        <legend>Contact Info</legend>
        <form-input
          type="text"
          label="Name"
          placeholder="Jane Doe"
          name="name"
        ></form-input>
        <form-input
          type="tel"
          label="Phone"
          placeholder="(208)123-4567"
          name="phone"
          pattern="^\d{3}-\d{3}-\d{4}$|^\d{10}$|^\(\d{3}\) \d{3}-\d{4}$|^\(\d{3}\) \d{3} \d{4}$|^\d{3} \d{3} \d{4}$"
        ></form-input>
        <form-input
          type="email"
          label="Email"
          placeholder="example@email.com"
          name="email"
        ></form-input>
      </fieldset>
      <fieldset>
        <legend>Vehicle Info</legend>
        <form-input
          type="text"
          label="Make"
          placeholder="Chevrolet"
          name="make"
        ></form-input>
        <form-input
          type="text"
          label="Model"
          placeholder="Silverado"
          name="model"
        ></form-input>
        <form-input
          type="number"
          label="Year"
          placeholder="2003"
          name="year"
        ></form-input>
      </fieldset>
      <form-select
        name="reason"
        label="Reason"
        placeholder="Select a reason"
        :options='options'
      ></form-select>
      <form-input
        type="textarea"
        name="message"
        label="Message"
        placeholder="Leave a message here..."
      ></form-input>
      <div class="actions">
        <form-button filled>Submit</form-button>
        <form-button>Reset</form-button>
      </div>
    </form>
    <i
      @click="$props.closeForm()"
      class="fas fa-times fa-3x icon"
      role="button"
    ></i>
  </div>
</template>


<script>
  import FormInput from "./form-input.vue"
  import FormSelect from "./form-select.vue"
  import FormButton from "./form-button.vue"

  export default {
    name: 'contact-form',
    data() {
      return {
        options: [
          "Routine Maintenance",
          "Engine",
          "A.C. / Heater",
          "Quotes",
          "Brakes",
          "Other"
        ]
      }
    },
    computed: {},
    methods: {},
    components: {
      FormInput,
      FormSelect,
      FormButton
    },
    props: {
      isOpen: {
        type: Boolean,
        default: false
      },
      closeForm: Function
    },
    watch: {
      '$props.isOpen'(newValue) {
        if (newValue) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "";
        }
      }
    }
  }
</script>


<style scoped>
  .contact-form {
    position: fixed;
    top: 0;
    left: 0;

    display: flex;

    width: 100vw;
    height: 100vh;

    background-color: white;

    z-index: 999;
  }

  form {
    width: 100%;
    max-width: 60rem;
    margin: 0 auto;
    padding: 3rem 2rem;
  }

  form > .title {
    text-align: center;
    margin-top: 2rem;
  }

  .icon {
    position: absolute;
    right: 1.5rem;
    top: 1rem;
    color: hsl(0, 0%, 70%);

    transition: color 0.2s;
    cursor: pointer;
  }

  .icon:hover,
  .icon:active,
  .icon:focus {
    color: hsl(0, 0%, 45%);
  }
</style>
