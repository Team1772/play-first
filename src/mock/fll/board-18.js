export default {
  number: 18,
  notification: "A bateria do robô estava fraca :( você teve que esperar algumas rodadas para recarregá-la novamente",
  roundSkip: 3,
  options: [
    {
      number: 1,
      button: {
        text: 'Andar 1 casa',
        solution: {
          visible: false,
          board: 19,
        }
      },
    },
    {
      number: 2,
      button: {
        text: 'Andar 2 casas',
        solution: {
          visible: false,
          board: 20,
        }
      },
    },
    {
      number: 3,
      button: {
        text: 'Andar 3 casas',
        solution: {
          visible: false,
          board: 21,
        },
      },
    },
  ]
}