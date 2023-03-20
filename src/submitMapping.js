import React, { useState, useEffect, useRef } from "react";
import { ArticleFull } from "./ui-components";
import CheckboxTree from "react-checkbox-tree";
import "react-checkbox-tree/lib/react-checkbox-tree.css";
import { Button, Divider } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import "./submitMapping.css";
import SaveMapping from "./saveMapping";
import axios from "axios";

function SubmitMapping({ content, suggestions }) {
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState(suggestions);
  const [expanded, setExpanded] = useState([]);
  const [triggerSave, setTriggerSave] = useState(false);

  const useAxiosPost = (url, payload, headers) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const [loaded, setLoaded] = useState(false);
    const categoriesPostedRef = useRef(false);

    useEffect(() => {
      if (!categoriesPostedRef.current) {
        categoriesPostedRef.current = true;
        axios
          .post(url, payload, headers)
          .then((response) => setData(response.data))
          .catch((error) => setError(error.message))
          .finally(() => setLoaded(true));
      }
    }, []);

    return { data, error, loaded };
  };

  const apidata = JSON.stringify({
    table: "SituationalOutline",
  });

  const { data, error, loaded } = useAxiosPost(
    "https://emory.wolftechnology.net/services/outline/",
    apidata
  );

  function getCategories() {
    const res = [];
    const nodes = data.Nodes;

    function recurse(obj) {
      const category = {};
      category.value = obj.ItemID;
      category.label = obj.VisualID + ". " + obj.Description;
      let nodes = obj.Nodes;
      if (nodes !== undefined) {
        category.children = [];
        nodes.forEach((node) => {
          category.children.push(recurse(node));
        });
      }
      return category;
    }

    nodes.forEach((node) => {
      res.push(recurse(node));
    });

    return res;
  }

  if (categories.length === 0 && data) {
    setCategories(getCategories());
  }

  const overrides = {
    titleText: {
      children: content.title,
    },
    contentText: {
      children: content.text,
    },
    URL: {
      children: content.link,
    },
  };

  if (loaded) {
    return error ? (
      <span>Error: {error}</span>
    ) : (
      <>
        <ArticleFull overrides={overrides} />
        <h3 style={{ marginLeft: 20, marginBottom: 0 }}>NTSA Categories</h3>
        <div style={{ marginLeft: 20, marginBottom: 20 }}>
          <CheckboxTree
            nodes={categories}
            checked={checked}
            expanded={expanded}
            onCheck={(checked) => setChecked(checked)}
            onExpand={(expanded) => setExpanded(expanded)}
            noCascade={true}
          />
        </div>
        <Divider></Divider>
        <div></div>
        <Button
          shrink="0"
          alignSelf="stretch"
          size="large"
          isDisabled={false}
          variation="primary"
          children="Submit"
          onClick={() => setTriggerSave(true)}
          style={{ marginLeft: 20, marginTop: 20 }}
          {...getOverrideProps(overrides, "Submit")}
        />
        {triggerSave ? (
          <SaveMapping content={content} checked={checked} />
        ) : null}
      </>
    );
  }
  return <span>Loading...</span>;
}

export default SubmitMapping;
