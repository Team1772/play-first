<template>
  <div>
    <Board game="fll" :board="board" :options="options" @board="setBoard" />
  </div>
</template>

<script>
import { Board } from '../components/'
import { 
  fll_board_1, 
  fll_board_2, 
  fll_board_3 
} from '../mock/'

export default {
    name: 'FLL',

    components: {
      Board,
    },

    computed: {
      options() {
        const { options } = this.board

        return options
      },
    },

    data() {
      return {
        board: fll_board_1,
        boards: [
          fll_board_1,
          fll_board_2,
          fll_board_3,
        ],
      }
    },

    methods: {
      setBoard(number) {
        this.board = this.boards.find(board => board.number === number)
      },
    }
}
</script>

<style>

</style>