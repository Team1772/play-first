<template>
    <div class="solution-option-container">
      <span>Opção {{number}}</span>
    </div> 
</template>

<script>
export default {
  name: "choose-option",

  props: {
    number: { 
      type: Number,
    },
  }
}
</script>

<style scoped>
.solution-option-container {
  display: flex;
  background: #0008361a;
  width: 30%;
  justify-content: center;
  margin: 0 auto 20px auto;
  border-radius: 8px 0px 8px 0px;
}

.solution-option-container > span{
  color: #000836;
  padding: 5px 2px;
}

@media (max-width: 600px) {
  .solution-option-container {
    width:120px;
  }
}
</style>