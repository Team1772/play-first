<template>
  <div class="card is-flex is-flex-direction-column align-center mt-3">
      <div class="card-content">
            <slot />
      </div>
  </div>
</template>

<script>
export default {
    name: 'Card',
}
</script>
<style scoped>
 .align-center {
   text-align: center;
 }
</style>