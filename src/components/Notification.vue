<template>
  <!-- <div v:bindclass="notification is-danger is-light"> -->
  <div v-bind:class="['notification', 'text-align', (isPowerUp) ? 'is-success-trailblazer' : 'is-danger is-light']">
    <button class="delete"></button>
    {{ text }}
  </div>
</template>

<script>
export default {
  name: "Notification",

  props: {
    text: {
      type: String,
    },
    isPowerUp: {
      type: Boolean,
      default: false,
    },
  },
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
</style>