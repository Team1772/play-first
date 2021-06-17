export default {
  number: 5,
  options: [
    {
      number: 1,
      button: {
        text: 'Andar 1 casa',
        solution: {
          visible: false,
          board: 6,
        }
      },
    },
    {
      number: 2,
      button: {
        text: 'Andar 2 casas, virar para esquerda',
        solution: {
          visible: false,
          board: 7,
        }
      },
    },
    {
      number: 3,
      button: {
        text: 'Andar 2 casas, virar para esquerda, andar 1 casa',
        solution: {
          visible: false,
          board: 8,
        },
      },
    },
  ]
}