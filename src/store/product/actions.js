import { API_URL } from "../../config";
import axios from "axios";

export function startLoading() {
  return { type: "START_LOADING_FLOWER", payload: true };
}

export function dataFetched(data) {
  return { type: "LOAD_FLOWER_COMPLETE", payload: data };
}

export function fetchFlower(id) {
  return async function thunk(dispatch, getState) {
    dispatch(startLoading());
    const data = await axios.get(`${API_URL}/products/${id}`);
    const newData = data.data;
    dispatch(dataFetched(newData));
  };
}
