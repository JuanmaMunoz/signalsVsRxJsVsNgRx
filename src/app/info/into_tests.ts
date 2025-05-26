import { IDataset, IPlayer } from '../models/interfaces';

export const mockPlayers: IPlayer[] = [
  {
    name: 'Player 1',
    goalMatch: 1,
    winMatch: 2,
    maxSpeed: 3,
    adwardWon: 4,
    goldenBall: 5,
    dribbling: 6,
    shotPower: 7,
    color: 'red',
    image: '/image.png',
  },
  {
    name: 'Player 2',
    goalMatch: 1,
    winMatch: 2,
    maxSpeed: 3,
    adwardWon: 4,
    goldenBall: 5,
    dribbling: 6,
    shotPower: 7,
    color: 'blue',
    image: '/image2.png',
  },
  {
    name: 'Player 3',
    goalMatch: 1,
    winMatch: 2,
    maxSpeed: 3,
    adwardWon: 4,
    goldenBall: 5,
    dribbling: 6,
    shotPower: 7,
    color: 'black',
    image: '/image3.png',
  },
];

export const mockDatset: IDataset[] = [
  {
    label: 'Player 1',
    data: [1, 2, 3, 4, 5, 6, 7],
    borderWidth: 1,
    backgroundColor: 'red',
    borderColor: 'red',
  },
  {
    label: 'Player 2',
    data: [1, 2, 3, 4, 5, 6, 7],
    borderWidth: 1,
    backgroundColor: 'blue',
    borderColor: 'blue',
  },
  {
    label: 'Player 3',
    data: [1, 2, 3, 4, 5, 6, 7],
    borderWidth: 1,
    backgroundColor: 'black',
    borderColor: 'black',
  },
];
