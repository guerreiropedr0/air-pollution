const FETCH_CONTINENT_REQUEST = 'FETCH_CONTINENT_REQUEST';
const FETCH_CONTINENT_SUCCESSFUL = 'FETCH_CONTINENT_SUCCESSFUL';
const FETCH_CONTINENT_FAILURE = 'FETCH_CONTINENT_FAILURE';

const fetchContinentRequest = () => ({
  type: FETCH_CONTINENT_REQUEST,
});

const fetchContinentSuccess = (countries) => ({
  type: FETCH_CONTINENT_SUCCESSFUL,
  payload: countries,
});

const fetchContinentFailure = (error) => ({
  type: FETCH_CONTINENT_FAILURE,
  payload: error,
});

const initialContinentState = {
  loading: false,
  countries: [],
  error: '',
};

export const continentReducer = (
  state = initialContinentState,
  { type, payload },
) => {
  switch (type) {
    case FETCH_CONTINENT_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_CONTINENT_SUCCESSFUL:
      return {
        ...state,
        loading: false,
        countries: payload.map(({ name, continents, latlng }) => ({
          name,
          continents: continents[0],
          latlng,
        })),
        error: '',
      };

    case FETCH_CONTINENT_FAILURE:
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

const fetchContinent = (continent) => async (dispatch) => {
  dispatch(fetchContinentRequest());
  const request = await fetch(
    `https://restcountries.com/v3.1/region/${continent}`,
  );
  try {
    const continents = await request.json();
    dispatch(fetchContinentSuccess(continents));
  } catch (error) {
    const errorMsg = error.message;
    dispatch(fetchContinentFailure(errorMsg));
  }
};

export default fetchContinent;
