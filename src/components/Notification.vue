<template>
    <div class="notification is-danger is-light">
        <button class="delete"></button>
        {{ text }}
    </div>
</template>

<script>
export default {
    name: 'Notification',

    props: {
        text: String,
    },
}
</script>

<style>

</style>