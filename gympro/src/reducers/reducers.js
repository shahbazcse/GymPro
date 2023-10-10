const initialState = {
  exercises: [],
  goals: [],
  foods: [],
  totalCaloriesBurned: 0,
  totalCaloriesConsumed: 0,
  totalCaloriesGoal: 0,
  remainingCalorieGoal: 0,
  loading: false,
  error: null,
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_EXERCISES":
      return {
        ...state,
        exercises: action.payload,
      };
    case "ADD_EXERCISE":
      return {
        ...state,
        exercises: [...state.exercises, action.payload],
      };
    case "DELETE_EXERCISE":
      return {
        ...state,
        exercises: action.payload,
      };
    case "INTIATE_LOADER":
      return {
        ...state,
        loading: !state.loading,
      };
    case "SERVER_ERROR":
      return {
        ...state,
        error: "Server Error, Please Try Again Later",
      };
    default:
      return state;
  }
};

export default AppReducer;
