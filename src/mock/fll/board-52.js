export default {
  number: 52,
  notification: "Ops! Parece que o seu robô perdeu uma peça no meio do caminho :(",
  options: [
    {
      number: 1,
      button: {
        text: 'Ir procurá-la',
        solution: {
          visible: false,
          board: 45,
        }
      },
    },
  ]
}