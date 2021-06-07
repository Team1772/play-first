export default {
  number: 2,
  notification: "Ops! Parece que o seu robô perdeu uma peça no meio do caminho :(",
  options: [
    {
      number: 1,
      button: {
        text: 'Volte 3 casas',
        solution: {
          visible: false,
          board: 1,
        }
      },
    },
  ]
}