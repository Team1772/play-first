<template>
  <div id="app" class="mt-5">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
  img[lazy=loading] {
      width: 100px !important;
      height: 100px !important;
  }

  img[lazy=error] {
    width: 150px !important;
    height: 150px !important;
  }
</style>
