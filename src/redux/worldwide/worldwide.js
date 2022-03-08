const FETCH_ALL_REQUEST = 'FETCH_ALL_REQUEST';
const FETCH_ALL_SUCCESSFUL = 'FETCH_ALL_SUCCESSFUL';
const FETCH_ALL_FAILURE = 'FETCH_ALL_FAILURE';

const fetchAllRequest = () => ({
  type: FETCH_ALL_REQUEST,
});

const fetchAllSuccess = (countries) => ({
  type: FETCH_ALL_SUCCESSFUL,
  payload: countries,
});

const fetchAllFailure = (error) => ({
  type: FETCH_ALL_FAILURE,
  payload: error,
});

const initialAllState = {
  loading: false,
  continents: {},
  error: '',
};

export const allReducer = (state = initialAllState, { type, payload }) => {
  switch (type) {
    case FETCH_ALL_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_ALL_SUCCESSFUL:
      return {
        ...state,
        loading: false,
        continents: {
          africa: payload
            .filter((country) => country.continents[0] === 'Africa')
            .map(({ name, continents, latlng }) => ({
              name,
              continents: continents[0],
              latlng,
            })),
          asia: payload.filter((country) => country.continents[0] === 'Asia'),
          southAmerica: payload
            .filter((country) => country.continents[0] === 'South America')
            .map(({ name, continents, latlng }) => ({
              name,
              continents: continents[0],
              latlng,
            })),
          northAmerica: payload
            .filter((country) => country.continents[0] === 'North America')
            .map(({ name, continents, latlng }) => ({
              name,
              continents: continents[0],
              latlng,
            })),
          europe: payload
            .filter((country) => country.continents[0] === 'Europe')
            .map(({ name, continents, latlng }) => ({
              name,
              continents: continents[0],
              latlng,
            })),
          oceania: payload
            .filter((country) => country.continents[0] === 'Oceania')
            .map(({ name, continents, latlng }) => ({
              name,
              continents: continents[0],
              latlng,
            })),
        },
        error: '',
      };

    case FETCH_ALL_FAILURE:
      return {
        ...state,
        loading: false,
        countries: [],
        error: payload,
      };

    default:
      return state;
  }
};

const fetchAll = () => async (dispatch) => {
  dispatch(fetchAllRequest());
  const request = await fetch('https://restcountries.com/v3.1/all');
  try {
    const regions = await request.json();
    dispatch(fetchAllSuccess(regions));
  } catch (error) {
    const errorMsg = error.message;
    dispatch(fetchAllFailure(errorMsg));
  }
};

export default fetchAll;
