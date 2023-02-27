import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { ArticleFull } from "./ui-components";
import CheckboxTree from "react-checkbox-tree";
import "react-checkbox-tree/lib/react-checkbox-tree.css";
import { Button, Divider } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import "./submitMapping.css";

const data = {
  Nodes: [
    {
      Description: "Reflective practice and personal improvement",
      ItemID: 1,
      Nodes: [{ Description: "Item 1 - 5 levels", ItemID: 2, VisualID: "A." }],
      VisualID: "I.",
    },
    {
      Description:
        "Contribution to or leadership of formal institutional quality improvement and/or safety activities",
      ItemID: 3,
      Nodes: [
        { Description: "Item 1 - 4 levels", ItemID: 4, VisualID: "A." },
        { Description: "Item 2 - 4 levels", ItemID: 5, VisualID: "B." },
      ],
      VisualID: "II.",
    },
    {
      Description: "Professionalism, Accountability, and Wellness",
      ItemID: 6,
      Nodes: [
        { Description: "Item 1 - 2 levels", ItemID: 7, VisualID: "A." },
        { Description: "Item 2 - 4 levels", ItemID: 8, VisualID: "B." },
        { Description: "Item 3 - 3 levels", ItemID: 9, VisualID: "C." },
        { Description: "Item 4 - 4 levels", ItemID: 10, VisualID: "D." },
        { Description: "Item 5 - 3 levels", ItemID: 11, VisualID: "E." },
      ],
      VisualID: "III.",
    },
    {
      Description: "Receiving feedback",
      ItemID: 12,
      Nodes: [{ Description: "Item 1 - 4 levels", ItemID: 13, VisualID: "A." }],
      VisualID: "IV.",
    },
    {
      Description: "Effectiveness as a Teacher or Presenter",
      ItemID: 14,
      Nodes: [
        { Description: "Items 1 - 4 levels", ItemID: 15, VisualID: "A." },
      ],
      VisualID: "V.",
    },
    {
      Description: "Evidence-based medicine",
      ItemID: 16,
      Nodes: [{ Description: "Item 1 - 5 levels", ItemID: 17, VisualID: "A." }],
      VisualID: "VI.",
    },
    {
      Description: "Adapting care for different populations",
      ItemID: 18,
      Nodes: [{ Description: "Item 1 - 3 level", ItemID: 19, VisualID: "A." }],
      VisualID: "VII.",
    },
    {
      Description: "Clinical reasoning",
      ItemID: 20,
      Nodes: [
        { Description: "Item 1 - 4 levels", ItemID: 21, VisualID: "A." },
        { Description: "Item 2 - 3 levels", ItemID: 22, VisualID: "B." },
      ],
      VisualID: "VIII.",
    },
    {
      Description: "Managing ethical issues",
      ItemID: 23,
      Nodes: [{ Description: "Item 1 - 4 levels", ItemID: 24, VisualID: "A." }],
      VisualID: "IX.",
    },
    {
      Description: "Managing conflict",
      ItemID: 25,
      Nodes: [
        { Description: "Item 1 - 4 levels", ItemID: 26, VisualID: "A." },
        { Description: "Item 2 - 4 levels", ItemID: 27, VisualID: "B." },
      ],
      VisualID: "X.",
    },
    {
      Description: "Crisis management skills",
      ItemID: 28,
      Nodes: [{ Description: "Item 1 - 3 levels", ItemID: 29, VisualID: "A." }],
      VisualID: "XI.",
    },
  ],
  Table: "SituationalOutline",
};

function SuggestMapping({ content }) {
  const suggestions = [];

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

  axios.interceptors.request.use((request) => {
    console.log("Starting Request", JSON.stringify(request, null, 2));
    return request;
  });

  const { data, error, loaded } = useAxiosPost(
    "https://api-inference.huggingface.co/models/gjbooth2/autotrain-glenn_ntsa_1-3621496854",
    { inputs: content.text },
    { headers: customHeaders }
  );

  const stringifiedData = useMemo(() => {
    return JSON.stringify(data || {});
  }, [data]);

  if (loaded) {
    return error ? <span>Error: {error}</span> : <p>{stringifiedData}</p>;
  }
  return <span>Loading...</span>;
}

// return (
//   <>
//     <ArticleFull overrides={overrides} />
//     <CheckboxTree
//       nodes={categories}
//       checked={checked}
//       expanded={expanded}
//       onCheck={(checked) => setChecked(checked)}
//       onExpand={(expanded) => setExpanded(expanded)}
//     />
//     <Divider></Divider>
//     <div></div>
//     <Button
//       shrink="0"
//       alignSelf="stretch"
//       size="large"
//       isDisabled={false}
//       variation="primary"
//       children="Submit"
//       {...getOverrideProps(overrides, "Submit")}
//     />
//   </>
// );
//}

export default SuggestMapping;
