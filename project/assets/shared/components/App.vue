<template>
    <div id="vue-root">
        <h1>Welcome to PHP UG!</h1>
        <div>
            You clicked the button {{ count }} times.
        </div>
        <div>
            <button @click="handleClick">Increment</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                count: 0,
            };
        },
        methods: {
            handleClick() {
                this.count++;
            },
        },
    };
</script>
