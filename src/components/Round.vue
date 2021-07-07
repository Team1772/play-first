<template>
  <div class="round-container">
    <small class="label">Rodada</small>
    <span class="round">{{ number }}</span>
  </div>
</template>

<script>
export default {
  name: "Round",

  props: {
    number: Number,
  },

  methods:{

  }
};
</script>

<style>
.round-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  min-width: 80px;
  background: #000836;
  border-radius: 16px 0;
  z-index: 1;
}

.round-container .label {
  margin-top: 3px;
  color: white;
}

.round-container .round {
  font-size: 3rem;
  margin-top: -20px;
  color: white;
}

@media (max-width: 600px) {
  .round-container .label {
    font-size: 0.8rem;
  }
  .round-container .round {
    margin-top: -10px;
    font-size: 2rem;
  }
}
</style>