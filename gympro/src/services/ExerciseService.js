import axios from "axios";
const api = "https://gymprobackend.shahbazahmad12.repl.co";

const getAllExercises = () => async (dispatch) => {
  try {
    dispatch({ type: "INTIATE_LOADER" });
    const response = await axios.get(`${api}/exercises`);
    dispatch({ type: "FETCH_EXERCISES", payload: response.data.exercises });
    dispatch({ type: "INTIATE_LOADER" });
  } catch (error) {
    dispatch({ type: "SERVER_ERROR" });
  }
};

const addExercise = (exercise) => async (dispatch) => {
  try {
    const response = await axios.post(`${api}/exercises`, {
      exerciseData: exercise,
    });
    if (response.status === 201) {
      dispatch({ type: "ADD_EXERCISE", payload: response.data.exercise });
    }
  } catch (error) {
    dispatch({ type: "SERVER_ERROR" });
  }
};

const deleteExercise = (exerciseId) => async (dispatch) => {
  try {
    const response = await axios.delete(`${api}/exercises/${exerciseId}`);
    if (response.status === 200) {
      dispatch({ type: "FETCH_EXERCISES", payload: response.data.exercises });
    }
  } catch (error) {
    dispatch({ type: "SERVER_ERROR" });
  }
};

export { getAllExercises, addExercise, deleteExercise };
