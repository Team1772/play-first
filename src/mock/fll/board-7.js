export default {
  number: 7,
  notification: "Ops! Parece que o seu robô perdeu uma peça no meio do caminho :(",
  roundSkip: 2,

  options: [
    {
      number: 1,
      button: {
        text: 'Voltar ao início para arrumar o robô',
        solution: {
          visible: false,
          board: 1,
        }
      },
    },
  ]
}