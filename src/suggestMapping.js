// SuggestMapping
// Calls Huggingface API to retrieve suggestions from model
// Passes suggestions to SubmitMapping

import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import SubmitMapping from "./submitMapping";

function SuggestMapping({ content }) {
  const useAxiosPost = (url, payload, headers) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
      axios
        .post(url, payload, headers)
        .then((response) => setData(response.data))
        .catch((error) => setError(error.message))
        .finally(() => setLoaded(true));
    }, []);

    return { data, error, loaded };
  };

  const customHeaders = {
    Authorization: "Bearer " + process.env.REACT_APP_HF_BEARER_TOKEN,
    "Content-Type": "application/json",
  };

  const { data, error, loaded } = useAxiosPost(
    "https://api-inference.huggingface.co/models/gjbooth2/autotrain-glenn_ntsa_2-40841105633",
    { inputs: content.text },
    { headers: customHeaders }
  );

  const stringifiedData = useMemo(() => {
    return JSON.stringify(data || {});
  }, [data]);

  const suggestions = [];
  if (loaded) {
    if (data) {
      data[0].forEach((element) => {
        if (element.score > 0.25 && element.label !== "ItemID_Nan") {
          suggestions.push(element.label.slice(7));
        }
      });
    }
    return error ? (
      <span>Error: {error}</span>
    ) : (
      <>
        <SubmitMapping content={content} suggestions={suggestions} />
        <p>{stringifiedData}</p>
      </>
    );
  }
  return <span>Loading...</span>;
}

export default SuggestMapping;
