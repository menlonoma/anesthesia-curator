// SuggestMapping
// Calls Huggingface API to retrieve suggestions from model
// Passes suggestions to SubmitMapping

import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import SubmitMapping from "./submitMapping";

function SuggestMapping({ content }) {
  function useAxiosPost() {
    const [ntsaData, setNtsaData] = useState(null);
    const [epaData, setEpaData] = useState(null);
    const [error, setError] = useState("");
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
      const customHeaders = {
        Authorization: "Bearer " + process.env.REACT_APP_HF_BEARER_TOKEN,
        "Content-Type": "application/json",
      };
      if (!loaded) {
        axios
          .all([
            axios.post(
              "https://api-inference.huggingface.co/models/gjbooth2/autotrain-glenn_ntsa_2-40841105633",
              { inputs: content.text },
              { headers: customHeaders }
            ),
            axios.post(
              "https://api-inference.huggingface.co/models/gjbooth2/autotrain-glenn_epa_second_pooled_25-3519195196",
              { inputs: content.text },
              { headers: customHeaders }
            ),
          ])
          .then(
            axios.spread((ntsa, epa) => {
              setNtsaData(ntsa.data);
              setEpaData(epa.data);
            })
          )
          .catch((error) => setError(error.message))
          .finally(() => setLoaded(true));
      }
    }, [loaded]);

    return { ntsaData, epaData, error, loaded };
  }

  const { ntsaData, epaData, error, loaded } = useAxiosPost();

  const stringifiedNtsaData = useMemo(() => {
    return JSON.stringify(ntsaData || {});
  }, [ntsaData]);

  const stringifiedEpaData = useMemo(() => {
    return JSON.stringify(epaData || {});
  }, [epaData]);

  const ntsaSuggestions = [];
  const epaSuggestions = [];

  if (loaded) {
    if (ntsaData) {
      ntsaData[0].forEach((element) => {
        if (element.score > 0.25 && element.label !== "ItemID_Nan") {
          ntsaSuggestions.push(element.label.slice(7));
        }
      });
    }
    if (epaData) {
      epaData[0].forEach((element) => {
        if (element.score > 0.25 && element.label !== "EPA.Nan") {
          epaSuggestions.push(element.label.slice(4));
        }
      });
    }
    return error ? (
      <span>Error: {error}</span>
    ) : (
      <>
        <SubmitMapping
          content={content}
          ntsaSuggestions={ntsaSuggestions}
          epaSuggestions={epaSuggestions}
        />
        <p>{stringifiedNtsaData}</p>
        <p>{stringifiedEpaData}</p>
      </>
    );
  }
  return <span>Loading...</span>;
}

export default SuggestMapping;
