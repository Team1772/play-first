export default {
  number: 2,
  notification: "Ops! Parece que o seu robô perdeu uma peça no meio do caminho :(",
  options: [
    {
      number: 1,
      button: {
        text: 'Andar 1 casa',
        solution: {
          visible: false,
          board: 3,
        }
      },
    },
    {
      number: 2,
      button: {
        text: 'Andar 2 casas',
        solution: {
          visible: false,
          board: 4,
        }
      },
    },
    {
      number: 3,
      button: {
        text: 'Andar 3 casas',
        solution: {
          visible: false,
          board: 5,
        },
      },
    },
  ]
}