export default {
  number: 1,
  notification: "Bem vind@ ao tabuleiro :D Comece selecionando uma opção para andar",
  isPowerUp: true,
  options: [
    {
      number: 1,
      button: {
        text: 'Andar 1 casa',
        solution: {
          visible: false,
          board: 2,
        }
      },
    },
    {
      number: 2,
      button: {
        text: 'Andar 2 casas',
        solution: {
          visible: false,
          board: 3,
        }
      },
    },
    {
      number: 3,
      button: {
        text: 'Andar 3 casas e virar para direita',
        solution: {
          visible: false,
          board: 4,
        },
      },
    },
  ]
}