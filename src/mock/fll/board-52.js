export default {
  number: 52,
  notification: "O robô precisa de algumas manutenções, e ficou algumas rodadas sendo consertado",
  roundSkip: 2,
  options: [
    {
      number: 1,
      button: {
        text: 'Andar 1 casa para testar o conserto',
        solution: {
          visible: false,
          board: 53,
        }
      },
    },
  ]
}