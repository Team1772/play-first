export default {
  number: 26,
  notification: "Ah não! Há um portão bloqueando o caminho",
  options: [
    {
      number: 1,
      button: {
        text: 'Virar à direita e andar 1 casa',
        solution: {
          visible: false,
          board: 27,
        }
      },
    },
  ]
}