<template>
  <div>
    <Board
      game="fll"
      :board="board.number"
      :options="options"
      @board="setBoard"
    />
  </div>
</template>

<script>
import { Board } from "../components/";
import {
  fll_board_1,
  fll_board_2,
  fll_board_3,
  fll_board_4,
  fll_board_5,
  fll_board_6,
  fll_board_7,
  fll_board_8,
  fll_board_9,
  fll_board_10,
  fll_board_11,
  fll_board_12,
  fll_board_13,
  fll_board_14,
  fll_board_15,
  fll_board_16,
  fll_board_17,
  fll_board_18,
  fll_board_19,
  fll_board_20,
  fll_board_21,
  fll_board_22,
  fll_board_23,
  fll_board_24,
  fll_board_25,
  fll_board_26,
  fll_board_27,
  fll_board_28,
  fll_board_29,
  fll_board_30,
  fll_board_31,
  fll_board_32,
  fll_board_33,
  fll_board_34,
  fll_board_35,
  fll_board_36,
  fll_board_37,
  fll_board_38,
  fll_board_39,
  fll_board_40,
  fll_board_41,
  fll_board_42,
  fll_board_43,
  fll_board_44,
  fll_board_45,
  fll_board_46,
  fll_board_47,
  fll_board_48,
  fll_board_49,
  fll_board_50,
  fll_board_51,
  fll_board_52,
  fll_board_53,
  fll_board_54,
  fll_board_55,
  fll_board_56,
} from "../mock/";

export default {
  name: "FLL",

  components: {
    Board,
  },

  computed: {
    options() {
      const { options } = this.board;

      return options;
    },

    round: 1,
  },

  data() {
    return {
      board: fll_board_1,
      boards: [
        fll_board_1,
        fll_board_2,
        fll_board_3,
        fll_board_4,
        fll_board_5,
        fll_board_6,
        fll_board_7,
        fll_board_8,
        fll_board_9,
        fll_board_10,
        fll_board_11,
        fll_board_12,
        fll_board_13,
        fll_board_14,
        fll_board_15,
        fll_board_16,
        fll_board_17,
        fll_board_18,
        fll_board_19,
        fll_board_20,
        fll_board_21,
        fll_board_22,
        fll_board_23,
        fll_board_24,
        fll_board_25,
        fll_board_26,
        fll_board_27,
        fll_board_28,
        fll_board_29,
        fll_board_30,
        fll_board_31,
        fll_board_32,
        fll_board_33,
        fll_board_34,
        fll_board_35,
        fll_board_36,
        fll_board_37,
        fll_board_38,
        fll_board_39,
        fll_board_40,
        fll_board_41,
        fll_board_42,
        fll_board_43,
        fll_board_44,
        fll_board_45,
        fll_board_46,
        fll_board_47,
        fll_board_48,
        fll_board_49,
        fll_board_50,
        fll_board_51,
        fll_board_52,
        fll_board_53,
        fll_board_54,
        fll_board_55,
        fll_board_56,
      ],
    };
  },

  methods: {
    setBoard(number) {
      this.board = this.boards.find((board) => board.number === number);
    },
  },
};
</script>

<style>
</style>