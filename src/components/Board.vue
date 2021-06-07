<template>
 <section class="section">
        <div class="container" id="board">
            <div class="columns">
                <div class="column">
                    <figure>
                        <img v-lazy="src" alt="Tabuleiro">
                    </figure>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="columns">
                <div class="column" v-for="{ number, button } in options" :key="number">
                    <Card>
                        <Button :text="button.text" :event="() => buttonToggle(button)" />
                        <div class="p-2 mb-5" v-if="button.solution.visible"> 
                            <figure>
                                <img v-lazy="getOptionSrc(number)" :alt="`Opção ${number}`">
                            </figure>
                            <Button 
                                :fullWidth="false" 
                                class="is-pulled-right" 
                                text="Escolher" 
                                :event="() => { setOption(button.solution.board) }" 
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
export default {
    name: 'Board',

    props: {
        game: String,
        board: Number,
        options: Array,
    },

    components: {
        Button,
        Card,
    },

    watch: {
        board(newBoard) {
            this.src = require(`../assets/${this.game}/boards/${newBoard}/board.png`)
        },
    },

    data() {
        return {
            src: require(`../assets/${this.game}/boards/${this.board}/board.png`),
        }
    },

    methods: {
        getOptionSrc(number) {
            return require(`../assets/${this.game}/boards/${this.board}/options/${number}.jpeg`)
        },

        setOption(board) {
            this.$emit('board', board)
        },

        buttonToggle(button) {
            let { solution } = button
            solution.visible = !solution.visible
        }
    }
}
</script>

<style scoped>
    .container#board {
        max-width: 700px !important;
    }

    figure {
        width: 100%;
        height: 100%;
        text-align: center;
        display: flex;
    }

    figure > img {
        margin: auto;
    }

    img[lazy=loading] {
      width: 50%!important;
      height: 50% !important;
    }
</style>