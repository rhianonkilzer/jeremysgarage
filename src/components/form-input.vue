<template>
    <div class="form-input">
      <label :for="id">{{label}}</label>
      <input :id="id" :placeholder="placeholder" :name="name" :type="type" />
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

</style>