import fetch from "isomorphic-fetch";
import { API } from "../config";
import { handleResponse } from "./auth";

export const create = (formData, token) => {
    return fetch(`${API}/foreword`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    })
      .then((response) => {
        handleResponse(response);
        return response.json();
      })
      .catch((err) => console.log(err));       
  };
  
  export const getForewords = () => {
    return fetch(`${API}/forewords`, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => console.log(err));
  };