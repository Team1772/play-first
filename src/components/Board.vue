<template>
  <section class="section">
    <div class="container" id="board">
      <div class="columns">
        <div class="column board-hud-container">
          <Round :number="round"/>
          <figure class="board-image">
            <img v-lazy="src" alt="Tabuleiro" />
          </figure>
        </div>
      </div>
    </div>
    <div class="container">
      <Notification :text="board.notification" :isPowerUp="board.isPowerUp" v-if="board.notification" />
      <div class="columns">
        <div class="column" v-for="{ number, button } in options" :key="number">
          <Card>
            <Button :text="button.text" :event="() => buttonToggle(button)" :keyEvent="board.isKey"/>
            <div class="p-2 mb-5" v-if="button.solution.visible">
              <figure>
                <img
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
import Button from "./Button";
import Card from "./Card";
import Notification from "./Notification";
import Round from "./Round";

export default {
  name: "Board",

  props: {
    game: String,
    board: Object,
    options: Array,
  },

  components: {
    Notification,
    Button,
    Card,
    Round,
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
      round: 1
    };
  },

  methods: {
    getOptionSrc(number) {
      return require(`../assets/${this.game}/boards/${this.board.number}/options/${number}.jpeg`);
    },

    setOption(board) {
      this.$emit("board", board);
    },

    buttonToggle(button) {
      let { solution } = button;
      solution.visible = !solution.visible;
    },

    nextRound(){
      this.round += 1 + (this.board.roundSkip || 0);
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

figure {
  display: flex;
  width: 100%;
  height: 100%;
  text-align: center;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

figure > img {
  margin: auto;
}

img[lazy="loading"] {
  width: 50% !important;
  height: 50% !important;
}

.board-hud-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}


</style>