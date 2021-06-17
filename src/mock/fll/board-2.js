export default {
  number: 2,

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
        text: 'Andar 2 casas, virar para baixo',
        solution: {
          visible: false,
          board: 4,
        }
      },
    },
    {
      number: 3,
      button: {
        text: 'Andar 2 casas, virar para baixo, andar 1',
        solution: {
          visible: false,
          board: 5,
        },
      },
    },
  ]
}