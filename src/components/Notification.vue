<template>
  <!-- <div v:bindclass="notification is-danger is-light"> -->
  <div v-if="isVisible" v-bind:class="['notification', 'text-align', (isPowerUp) ? 'is-success-trailblazer' : 'is-danger is-light']">
    <button @click="toggleNotification" class="delete"></button>
    {{ text }}
  </div>
</template>

<script>
export default {
  name: "Notification",

  data() {
    return {
      isVisible: true,
    }
  },

  props: {
    text: {
      type: String,
    },
    isPowerUp: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    toggleNotification() {
      this.isVisible = !this.isVisible;
    }
  }
};
</script>

<style>
.is-success-trailblazer {
  background: #0008361a;
  color: #000836;
}

.text-align {
  text-align: center;
}

@media (max-width: 600px) {
  .notification {
    font-size: 0.9rem;
  }
}
</style>