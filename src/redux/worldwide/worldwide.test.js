import store from '../ConfigureStore';
import { fetchAllSuccess } from './worldwide';

const mocked = [
  {
    name: {
      common: 'Montenegro',
      official: 'Montenegro',
    },
    latlng: [
      23, 242,
    ],
    continents: ['Europe'],
  },
  {
    name: {
      common: 'Tokelau',
      official: 'Tokelau',
    },
    latlng: [
      23, 242,
    ],
    continents: ['Asia'],
  },
  {
    name: {
      common: 'Cuba',
      official: 'Republic of Cuba',
    },
    latlng: [
      23, 242,
    ],
    continents: ['Africa'],
  },
  {
    name: {
      common: 'Guadeloupe',
      official: 'Guadeloupe',
    },
    latlng: [
      23, 242,
    ],
    continents: ['Oceania'],
  },
  {
    name: {
      common: 'Guadeloupe',
      official: 'Guadeloupe',
    },
    latlng: [
      23, 242,
    ],
    continents: ['South America'],
  },
  {
    name: {
      common: 'Guadeloupe',
      official: 'Guadeloupe',
    },
    latlng: [
      23, 242,
    ],
    continents: ['North America'],
  },
];

describe('Store', () => {
  it('All Reducer Has correct state', () => {
    store.dispatch(fetchAllSuccess(mocked));
    expect(store.getState().allReducer.continents.europe).toHaveLength(1);
    expect(store.getState().allReducer.continents.asia).toHaveLength(1);
    expect(store.getState().allReducer.continents.southamerica).toHaveLength(1);
    expect(store.getState().allReducer.continents.northamerica).toHaveLength(1);
  });
});
