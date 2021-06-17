export default {
  number: 24,
  notification: "Seu robô está rápido! Ele irá parar quando houver um obstáculo em sua frente",
  isPowerUp: true,
  roundSkip: -1,
  options: [
    {
      number: 1,
      button: {
        text: 'Continuar andando até que haja um obstáculo em sua frente',
        solution: {
          visible: false,
          board: 26,
        }
      },
    },
  ]
}