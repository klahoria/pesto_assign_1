import React from "react";
import axios from "axios";
import { useStateValue } from "../AuthGaurd/AuthContext";
import { LOGIN } from "./type";
// import axios from 'axios';

export const SET_SEARCH_TERM = () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/todos/")
    .then((data) => {
      return data.data;
    });
};
