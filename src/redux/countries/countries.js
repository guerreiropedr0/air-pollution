const FETCH_REGION_REQUEST = 'FETCH_REGION_REQUEST';
const FETCH_REGION_SUCCESSFUL = 'FETCH_REGION_SUCCESSFUL';
const FETCH_REGION_FAILURE = 'FETCH_REGION_FAILURE';

const fetchRegionRequest = () => ({
  type: FETCH_REGION_REQUEST,
});

const fetchRegionSuccess = (countries) => ({
  type: FETCH_REGION_SUCCESSFUL,
  payload: countries,
});

const fetchRegionFailure = (error) => ({
  type: FETCH_REGION_FAILURE,
  payload: error,
});

const initialRegionState = {
  loading: false,
  countries: [],
  error: '',
};

export const regionReducer = (
  state = initialRegionState,
  { type, payload },
) => {
  switch (type) {
    case FETCH_REGION_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_REGION_SUCCESSFUL:
      return {
        ...state,
        loading: false,
        countries: payload.map((c) => [c.latlng, c.name, { region: c.region }]),
        error: '',
      };

    case FETCH_REGION_FAILURE:
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

const fetchRegion = (region) => async (dispatch) => {
  dispatch(fetchRegionRequest());
  const request = await fetch(
    `https://restcountries.com/v3.1/region/${region}`,
  );
  try {
    const regions = await request.json();
    dispatch(fetchRegionSuccess(regions));
  } catch (error) {
    const errorMsg = error.message;
    dispatch(fetchRegionFailure(errorMsg));
  }
};

export default fetchRegion;
