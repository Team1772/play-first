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
            <ChooseOption :number="number"/>
            <Button :text="button.text" :event="() => buttonToggle(button)"/>
            <div class="p-2 mb-5" v-if="button.solution.visible">
              <figure>
                <img
                  v-bind:class="['solution-img', (board.isSolutionFullwidth) ? 'is-fullwidth' : 'is-300px-width']"
                  v-lazy="getOptionSrc(number)"
                  :alt="`Opção ${number}`"
                />
              </figure>
              <div class="buttons-flex">
                <Button
                  :fullWidth="false"
                  class="is-pulled-right solution-button"
                  text="Escolher"
                  :event="() => { setOption(button.solution.board); }"
                />
           
              </div>  
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
import ChooseOption from "./ChooseOption.vue"

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
    ChooseOption,
  },

  watch: {
    board(newBoard) {
      this.src = require(`../assets/${this.game}/boards/${newBoard.number}/board.png`); 
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

      this.nextRound();
    },

    buttonToggle(button) {
      let { solution } = button;
      solution.visible = !solution.visible;
    },

    nextRound(){
      if (this.board.isRestart) this.round = 1
      else this.round += 1 + (this.board.roundSkip || 0);
    },
  },
};
</script>

<style scoped>
.section {
  padding-top: 0;
}

.container#board {
  max-width: 800px !important;
  pointer-events: none;
}

figure {
  display: flex;
  width: 100%;
  height: 100%;
  text-align: center;
  user-select: none;
}

figure > img {
  margin: auto;
}

.solution-img {
  margin-top: 30px;
  margin-bottom: 30px;
  transition: 1s;
  -webkit-user-drag: none;
}

.solution-img:active {
  transform: scale(1.23);
  transition: 0.5s;
  cursor: zoom-in;
  margin-top: 40px;
  margin-bottom: 40px;
}

@media (max-width: 600px) {
  figure {
  transform: scale(1.12);
  }

  .solution-img{
    width: 200px;
  }

  .solution-img:hover {
    transform: scale(1.25);
    transition: 0.5s;
    margin-top: 40px;
    margin-bottom: 40px;
  }  

  .solution-button{
    width: 120px;
  }
}

.buttons-flex {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@media (max-width: 600px) {
  .buttons-flex {
    flex-direction: row-reverse;
    justify-content: space-evenly;
  }

  .is-pulled-right {
    margin: 0px 0px -50px 0px;
  }
}

.solution-option:active {
  font-size: 1.2rem;
}

.is-300px-width {
  max-width: 300px;
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