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

  // for debugging
  // axios.interceptors.request.use((request) => {
  //   console.log("Starting Request", JSON.stringify(request, null, 2));
  //   return request;
  // });

  const { data, error, loaded } = useAxiosPost(
    "https://api-inference.huggingface.co/models/gjbooth2/autotrain-glenn_ntsa_1-3621496854",
    { inputs: content.text },
    { headers: customHeaders }
  );

  const stringifiedData = useMemo(() => {
    return JSON.stringify(data || {});
  }, [data]);

  const suggestions = [9, 15, 21];

  if (loaded) {
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
