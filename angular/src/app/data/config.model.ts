export interface Config {
  api: {
    uttt: {
      base: string,
      uri: {
        uttt: string
      }
    }
  },
  gameOptions: {
    localGame: {
      name: string,
      options: {
        opponents: string[],
        firstTurn: string[],
        difficulties: string[]
      }
    },
    onlineGame: {
      name: string
    }
  }
}
