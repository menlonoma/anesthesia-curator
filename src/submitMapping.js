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
  const parentSet = new Set();
  // parentSet is global to collect all ancestors of suggestions,
  //  updated by getCategories()

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

  // getCategories
  // Args - none
  // Returns
  //  Nested array of nodes formatted for CheckboxTree, also includes
  //  array of ancestors with each node to make tree expansion easier
  function getCategories() {
    const res = [];
    const nodes = data.Nodes;

    function recurse(obj, parents) {
      const category = {};
      category.value = obj.ItemID;
      category.label = obj.VisualID + ". " + obj.Description;
      // highlight
      if (suggestions && suggestions.includes(obj.ItemID.toString())) {
        category.label = <mark>{category.label}</mark>;
      }
      let newParents = [];
      if (parents) {
        // use slice to copy parents array, cannot pass by reference
        newParents = parents.slice(0);
        if (suggestions && suggestions.includes(obj.ItemID.toString())) {
          parents.forEach((parent) => {
            parentSet.add(parent);
          });
        }
      }
      let nodes = obj.Nodes;
      if (nodes !== undefined) {
        category.children = [];
        newParents.push(obj.ItemID);
        nodes.forEach((node) => {
          category.children.push(recurse(node, newParents.slice(0)));
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

  if (parentSet.size > 0 && expanded.length === 0) {
    setExpanded(Array.from(parentSet));
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
