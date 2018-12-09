<template>
    <button class="form-button">
        <slot></slot>
    </button>
</template>


<script>
    export default {
        name: 'form-button',
        props: {},
        data() {
            return {}
        },
        computed: {},
        methods: {},
        components: {}

    }
</script>


<style scoped>
    .form-button {
        border-radius: 3px;
        background-color: #A0A7A7;
        color: white;
        border: none;
        margin: .5rem;
        padding: 0.25rem 0.75rem;
        font-size: 16px;
    }
</style>
