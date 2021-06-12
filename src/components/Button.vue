<template>
        <button 
            :class="['button', isFullWidth, isLoading, isKeyEvent]"
            @click="event"
            v-html="text || hasIcon"
        />
</template>

<script>
export default {
    name: 'Button',
    
    props: {
        text: { 
            type: String,
        },
        event: {
            type: Function,
            required: true,
        },
        keyEvent:{
            type: Boolean,
            default: false,
        },
        loading: {
            type: Boolean,
            default: false,
        },
        icon: {
            type: String,
        },
        fullWidth: {
            type: Boolean,
            default: true,
        },
    },
    computed: {
        isLoading() {
            return this.loading ? 'is-loading' : ''
        },
        isFullWidth() {
            return this.fullWidth ? 'is-fullwidth' : ''
        },
        hasIcon() {
            return this.icon ? `<i class="fas fa-${this.icon}"></i>` : ''
        },
        isKeyEvent() {
            return  this.keyEvent ? 'yellow-border' : ''
        },
    },
}
</script>

<style>
    .yellow-border{
        border: 3px solid rgb(228, 272, 74);
    }

    .yellow-border:hover{
        background: rgb(228, 272, 74);
        border: 3px solid rgb(228, 272, 74);
        font-weight: 600;
        color: #000000;
    }
</style>