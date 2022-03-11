const FETCH_COUNTRY_POLLUTION_REQUEST = 'FETCH_COUNTRY_POLLUTION_REQUEST';
const FETCH_COUNTRY_POLLUTION_SUCCESSFUL = 'FETCH_COUNTRY_POLLUTION_SUCCESSFUL';
const FETCH_COUNTRY_POLLUTION_FAILURE = 'FETCH_COUNTRY_POLLUTION_FAILURE';

const fetchCountryPollutionRequest = () => ({
  type: FETCH_COUNTRY_POLLUTION_REQUEST,
});

export const fetchCountryPollutionSuccess = (countryPollution) => ({
  type: FETCH_COUNTRY_POLLUTION_SUCCESSFUL,
  payload: countryPollution,
});

const fetchCountryPollutionFailure = (error) => ({
  type: FETCH_COUNTRY_POLLUTION_FAILURE,
  payload: error,
});

const initialCountryPollutionState = {
  loading: false,
  countryPollution: {},
  error: '',
};

export const countryPollutionReducer = (
  state = initialCountryPollutionState,
  { type, payload },
) => {
  switch (type) {
    case FETCH_COUNTRY_POLLUTION_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_COUNTRY_POLLUTION_SUCCESSFUL:
      return {
        ...state,
        loading: false,
        countryPollution: payload,
        error: '',
      };

    case FETCH_COUNTRY_POLLUTION_FAILURE:
      return {
        ...state,
        loading: false,
        countryPollution: {},
        country: null,
        error: payload,
      };

    default:
      return state;
  }
};

const fetchCountryPollution = (latlng, countryName) => async (dispatch) => {
  dispatch(fetchCountryPollutionRequest());
  const request = await fetch(
    `https://api.openweathermap.org/data/2.5/air_pollution?lat=${latlng[0]}&lon=${latlng[1]}&appid=80a504136ef8fec9a3ecbfa7bada1535`,
  );
  try {
    const countryPollution = await request.json();
    countryPollution.countryName = countryName;
    dispatch(fetchCountryPollutionSuccess(countryPollution));
  } catch (error) {
    const errorMsg = error.message;
    dispatch(fetchCountryPollutionFailure(errorMsg));
  }
};

export default fetchCountryPollution;
