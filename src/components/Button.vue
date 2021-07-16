<template>
        <button 
            :class="['btn','wrap', isFullWidth, isLoading]"
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
    },
}
</script>

<style scoped>
.btn {
    display: flex;
    width: 100%;
    justify-content: center;
    background: inherit;
    border: 1px solid #ebebeb;
    font-size: 1rem;
    padding: 10px 5px;
    border-radius: 3px;
    cursor: pointer;
    opacity: .9;
}

.btn:hover {
    border-color: #a7d5ff;
    opacity: 1;
}

@media (max-width: 600px) {
    .btn {    
        width: 70%;
        margin: 0 auto;
        font-size: 0.9rem;
    }
}
</style>