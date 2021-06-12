export default {
  number: 32,
  notification: "Você encontrou a chave!",
  isPowerUp: true,
  isKey: true,
  options: [
    {
      number: 1,
      button: {
        text: 'Pegar chave',
        solution: {
          visible: false,
          board: 33,
        }
      },
    },
  ]
}