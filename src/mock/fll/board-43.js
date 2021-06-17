export default {
  number: 43,
  notification: "Opa! Seu robô está tão rápido, que andou casas a mais",
  isPowerUp: true,
  options: [
    {
      number: 1,
      button: {
        text: 'Andar 2 casas, virar para direita, andar 2 casas, virar para cima, andar 1 casa',
        solution: {
          visible: false,
          board: 48,
        }
      },
    },
  ]
}