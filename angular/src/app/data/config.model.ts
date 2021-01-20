export interface Config {
  api: {
    uttt: {
      base: string;
      uri: {
        uttt: string;
      };
    };
  };
  gameOptions: {
    localGame: {
      name: string;
      options: {
        gameModes: string[];
        opponents: string[];
        difficulties: string[];
      };
    };
    onlineGame: {
      name: string;
    };
  };
}
