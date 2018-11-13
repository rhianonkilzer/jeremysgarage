<template>
    <div v-if="open" class="contact-form">
        <form accept-charset="UTF-8" action="https://usebasin.com/f/8345c28386f6" method="POST">

        </form>

    </div>
</template>


<script>
    import FormInput from "./form-input.vue"
    import FormSelect from "./form-select.vue"
    import FormButton from "./form-button.vue"

    export default {
        name: 'contact-form',
        data() {
            return {}
        },
        computed: {},
        methods: {},
        components: {
            FormInput,
            FormSelect,
            FormButton


        },
        props: {
            open: Boolean
        }
    }
</script>


<style scoped>

</style>