import React, { useState, useEffect } from "react";

// const CONTEXT_KEY = "3cdae6ae0939cd4d7";

// const API_KEY = "AIzaSyC_i23Vpby-gCFc-_igHjJxybLm0-nieIc";
const API_KEY = "AIzaSyAAyD8mrdo_VUWLePjiANdVUUHF53rvr9o";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=d112155f7596fd999&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
          console.log(result);
        });
    };
    fetchData();
  }, [term]);
  return { data };
};

export default useGoogleSearch;
