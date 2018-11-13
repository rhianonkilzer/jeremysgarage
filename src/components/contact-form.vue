<template>
    <div v-if="isOpen" class="contact-form">
        <form accept-charset="UTF-8" action="https://usebasin.com/f/8345c28386f6" method="POST">
            <h1 class="title mb-5">Schedule an Appointment</h1>

        </form>
        <i @click="$props.closeForm()" class="fas fa-times fa-3x icon" role="button"></i>
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

    form>.title {
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