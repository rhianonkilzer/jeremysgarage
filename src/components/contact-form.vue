<template>
    <div v-if="isOpen" class="contact-form">
        <form accept-charset="UTF-8" action="https://usebasin.com/f/8345c28386f6" method="POST">
            <h1>Schedule an appointment:</h1>
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
        justify-content: center;
        align-items: center;

        width: 100vw;
        height: 100vh;

        background-color: white;

        z-index: 999;
    }
</style>