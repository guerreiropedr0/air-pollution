const CURRENT_CONTINENT_REQUEST = 'CURRENT_CONTINENT_REQUEST';
const CURRENT_CONTINENT_SUCCESS = 'CURRENT_CONTINENT_SUCCESS';
const CURRENT_CONTINENT_FAILURE = 'CURRENT_CONTINENT_FAILURE';

const currentContinentRequest = () => ({
  type: CURRENT_CONTINENT_REQUEST,
});

const currentContinentSuccess = (currentContinent) => ({
  type: CURRENT_CONTINENT_SUCCESS,
  payload: currentContinent,
});

const currentContinentFailure = (error) => ({
  type: CURRENT_CONTINENT_FAILURE,
  payload: error,
});

const initialCurrentContinentState = {
  loading: false,
  currentContinent: '',
  error: '',
};

export const currentContinentReducer = (
  state = initialCurrentContinentState,
  { type, payload },
) => {
  switch (type) {
    case CURRENT_CONTINENT_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case CURRENT_CONTINENT_SUCCESS:
      return {
        ...state,
        loading: false,
        currentContinent: payload,
        error: '',
      };

    case CURRENT_CONTINENT_FAILURE:
      return {
        ...state,
        loading: false,
        currentContinent: '',
        error: payload,
      };

    default:
      return state;
  }
};

const currentContinent = (currentContinent) => async (dispatch) => {
  dispatch(currentContinentRequest());
  try {
    dispatch(currentContinentSuccess(currentContinent));
  } catch (error) {
    const errorMsg = error.message;
    dispatch(currentContinentFailure(errorMsg));
  }
};

export default currentContinent;
