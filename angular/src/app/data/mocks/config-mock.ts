import { Config } from '../config.model';

export const configMock: Config = {
  api: {
    uttt: {
      base: 'test',
      uri: {
        uttt: '',
      },
    },
  },
  gameOptions: {
    localGame: {
      name: 'Local Game',
      options: {
        gameModes: ['Play against a friend', 'Play against a computer'],
        opponents: ['Player', 'Computer'],
        difficulties: ['Beginner', 'MCTS Easy', 'MCTS Medium', 'MCTS Hard'],
      },
    },
    onlineGame: {
      name: 'Online Game',
    },
  },
};
