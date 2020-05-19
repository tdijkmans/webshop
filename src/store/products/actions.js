import { API_URL } from "../../config";
import axios from "axios";

export function startLoading() {
  return { type: "START_LOADING", payload: true };
}

export function dataFetched(data) {
  return { type: "LOAD_COMPLETE", payload: data };
}

export async function fetchData(dispatch, getState) {
  dispatch(startLoading());
  const data = await axios.get(`${API_URL}/products`);
  const newData = data.data;
  dispatch(dataFetched(newData));
}