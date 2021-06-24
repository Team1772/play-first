export default {
  number: 18,
  notification: "O robô perdeu o equilíbrio e caiu :(",
  roundSkip: 3,
  options: [
    {
      number: 1,
      button: {
        text: 'Levantar novamente',
        solution: {
          visible: false,
          board: 19,
        }
      },
    },
  ]
}