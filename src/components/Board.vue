<template>
  <section class="section">
    <div class="container" id="board">
      <div class="columns">
        <div class="column board-hud-container">
          <!-- make a round component later -->
          <div class="round-container">
            <small class="label">Rodada</small>
            <span class="round">{{ this.round }}</span>
          </div>
          <figure class="board-image">
            <img v-lazy="src" alt="Tabuleiro" />
          </figure>
        </div>
      </div>
      <Notification :text="board.notification" v-if="board.notification" />
    </div>
    <div class="container">
      <div class="columns">
        <div class="column" v-for="{ number, button } in options" :key="number">
          <Card>
            <Button :text="button.text" :event="() => buttonToggle(button)" />
            <div class="p-2 mb-5" v-if="button.solution.visible">
              <figure>
                <img
                  class="img-option"
                  v-lazy="getOptionSrc(number)"
                  :alt="`Opção ${number}`"
                />
              </figure>
              <Button
                :fullWidth="false"
                class="is-pulled-right"
                text="Escolher"
                :event="() => { setOption(button.solution.board); }"
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Button } from './'
import Card from './Card'
import Notification from './Notification'
export default {
  name: "Board",

  props: {
    game: String,
    board: Number,
    options: Array,
  },

  components: {
    Notification,
    Button,
    Card,
  },

  watch: {
    board(newBoard) {
      this.src = require(`../assets/${this.game}/boards/${newBoard.number}/board.png`);

      this.nextRound();
    },
  },

  data() {
    return {
      src: require(`../assets/${this.game}/boards/${this.board.number}/board.png`),
      round: 1,
    };
  },

  methods: {
    getOptionSrc(number) {
        return require(`../assets/${this.game}/boards/${this.board.number}/options/${number}.jpeg`)
    },

    setOption(board) {
      this.$emit('board', board)
    },

    buttonToggle(button) {
      let { solution } = button;
      solution.visible = !solution.visible;
    },

    nextRound() {
      this.round++;
    },
},
};
</script>

<style>
.container#board {
  max-width: 800px !important;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

img[lazy=loading] {
  width: 50%!important;
  height: 50% !important;
}

.img-option {
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.board-hud-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.round-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  background: #000836;
  border-radius: 16px 0;
}

.round-container .label {
  margin-top: 3px;
  color:  white;
}

.round-container .round {
  font-size: 3rem;
  margin-top: -20px;
  color: white;
}

@media (max-width: 768px) {
  .container#board {
    width: 110vw;
    margin: 0 auto;
    position: relative;
    left: -10%;
  }
}
</style>