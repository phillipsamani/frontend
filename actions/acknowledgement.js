import fetch from "isomorphic-fetch";
import { API } from "../config";
import { handleResponse } from "./auth";

export const create = (acknowledgement, token) => {
    return fetch(`${API}/acknowledgement`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(acknowledgement),
    })
      .then((response) => {
        handleResponse(response);
        return response.json();
      })
      .catch((err) => console.log(err));       
  };
  
  export const getAcknowledgements = () => {
    return fetch(`${API}/acknowledgements`, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => console.log(err));
  };