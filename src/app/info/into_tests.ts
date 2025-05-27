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
    color: 'rgba(100,100,100,1)',
    image: '/assets/images/messi.png',
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
    color: 'rgba(100,100,100,1)',
    image: '/assets/images/messi.png',
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
    color: 'rgba(100,100,100,1)',
    image: '/assets/images/messi.png',
  },
];

export const mockDatset: IDataset[] = [
  {
    label: 'Player 1',
    data: [1, 2, 3, 4, 5, 6, 7],
    borderWidth: 1,
    backgroundColor: 'rgba(100,100,100,0.3)',
    borderColor: 'rgba(100,100,100,1)',
  },
  {
    label: 'Player 2',
    data: [1, 2, 3, 4, 5, 6, 7],
    borderWidth: 1,
    backgroundColor: 'rgba(100,100,100,0.3)',
    borderColor: 'rgba(100,100,100,1)',
  },
  {
    label: 'Player 3',
    data: [1, 2, 3, 4, 5, 6, 7],
    borderWidth: 1,
    backgroundColor: 'rgba(100,100,100,0.3)',
    borderColor: 'rgba(100,100,100,1)',
  },
];

export const tableTranslation = {
  table: {
    title: 'Angular Signals <span class="text-secondary">vs</span> RxJS Subjects <span class="text-secondary">vs</span> NgRx Comparison',
    description:
      'From my perspective and based on my <strong>experience</strong>, I have created this table comparing the <strong>advantages</strong> and <strong>disadvantages</strong> of these three tools for <strong>state management</strong> in an application. To do this, I have considered factors such as <strong>complexity</strong>, <strong>performance</strong>, <strong>application types</strong>, etc. It is important to note that this is my <strong>personal opinion</strong> and each reader may have their own <strong>point of view</strong>.',
    paradigm: {
      title: 'Paradigm',
      signals: 'Reactive and signal-based',
      rxjs: 'Reactive programming based on streams',
      ngrx: 'Centralized state based on Redux',
    },
    complexity: {
      title: 'Complexity',
      signals: '<span class="text-success">Very easy to understand and use</span>',
      rxjs: '<span class="text-warning">Requires knowledge of RxJS</span>',
      ngrx: '<span class="text-danger">Requires knowledge of RxJS and Redux</span',
    },
    performance: {
      title: 'Performance',
      signals: '<span class="text-success">High (recalculated only when the signal changes)</span>',
      rxjs: '<span class="text-success">High (manual flow management)</span>',
      ngrx: '<span class="text-warning">Can be less efficient due to the use of reducers and immutable state</span>',
    },
    developmentTime: {
      title: 'Development Time',
      signals: '<span class="text-success">Very Low</span>',
      rxjs: '<span class="text-success">Low</span>',
      ngrx: '<span class="text-danger">High</span>',
    },
    strategyChange: {
      title: 'Change strategy',
      signals: 'Via .set() and .update()',
      rxjs: 'Via .next()',
      ngrx: 'Based on Redux (actions, reducers, and effects)',
    },
    unsubscribe: {
      title: 'Requires Unsubscription',
      signals: '<span class="text-success">No</span>',
      rxjs: '<span class="text-danger">Yes</span>',
      ngrx: '<span class="text-danger">Yes with observables</span>, <span class="text-success">No with Signals (Angular 17)</span>',
    },
    debug: {
      title: 'Debugging',
      signals: '<span class="text-success">Easy to debug</span>',
      rxjs: '<span class="text-warning">Can become complex</span>',
      ngrx: '<span class="text-success">Advanced tools like Redux DevTools</span>',
    },
    appTypes: {
      title: 'Suitable for',
      signals: 'Small, medium apps, and micro-fronts',
      rxjs: 'Small, medium apps, and micro-fronts',
      ngrx: 'Large monolithic apps or micro-fronts with their own store',
    },
    compatibility: {
      title: 'Compatibility',
      signals: '<span class="text-danger">Not available before Angular 16</span>',
      rxjs: '<span class="text-success">Available in all versions</span>',
      ngrx: '<span class="text-success">Available in all versions</span>',
    },
  },
};
