// import fetch from "isomorphic-fetch";
// import { API } from "../config";
// import { handleResponse } from "./auth";

// export const syllabusSections = (slug, syllabus) => {
//   return fetch(`${API}/section-syllabus/${slug}`, {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(syllabus),
//   })
//     .then((response) => {
//       handleResponse(response);
//       return response.json();
//     })
//     .catch((err) => console.log(err));
// };

// export const getSubstrandSyllabusSections = (substrand) => {
//   return fetch(`${API}/section-substrand-syllabus`, {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(substrand),
//   })
//     .then((response) => {
//       handleResponse(response);
//       return response.json();
//     })
//     .catch((err) => console.log(err));
// };

// export const  = (slug, syllabus) => {
//   return fetch(`${API}/syllabus-section/${slug}`, {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(syllabus),
//   })
//     .then((response) => {
//       handleResponse(response);
//       return response.json();
//     })
//     .catch((err) => console.log(err));
// };

import fetch from "isomorphic-fetch";
import { API } from "../config";
import { handleResponse } from "./auth";

export const getSectionSyllabus = (slug, syllabus) => {
  return fetch(`${API}/syllabus-section/${slug}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(syllabus),
  })
    .then((response) => {
      handleResponse(response);
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getSyllabusSections = (slug, data) => {
  return fetch(`${API}/syllabus-section-substrand/${slug}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      handleResponse(response);
      return response.json();
    })
    .catch((err) => console.log(err));
};


export const getSubstrandSyllabusSections = (substrand) => {
  return fetch(`${API}/section-substrand-syllabus`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(substrand),
  })
    .then((response) => {
      handleResponse(response);
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getSections = () => {
  return fetch(`${API}/sections`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

  // export const syllabusSection = (slug, substrand) => {
  //   return fetch(`${API}/syllabus-section/${slug}`, {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(substrand),
  //   })
  //     .then((response) => {
  //       handleResponse(response);       
  //       return response.json();
  //     })
  //     .catch((err) => console.log(err));
  // };