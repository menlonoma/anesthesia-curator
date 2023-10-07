// SubmitMapping
// Retrieves categories from /outline endpoint
// Displays checkboxes with ML model suggestions if provided

import React, { useState, useEffect, useRef } from "react";
import { ArticleFull } from "./ui-components";
import CheckboxTree from "react-checkbox-tree";
import "react-checkbox-tree/lib/react-checkbox-tree.css";
import { Button, Divider, Tabs, TabItem } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import SaveMapping from "./saveMapping";
import axios from "axios";

function SubmitMapping({ content, ntsaSuggestions, epaSuggestions }) {
  const [ntsaCategories, setNtsaCategories] = useState([]);
  const [ntsaChecked, setNtsaChecked] = useState(ntsaSuggestions);
  const [ntsaExpanded, setNtsaExpanded] = useState([]);
  const [epaCategories, setEpaCategories] = useState([]);
  const [epaChecked, setEpaChecked] = useState(epaSuggestions);
  const [epaExpanded, setEpaExpanded] = useState([]);
  const [triggerSave, setTriggerSave] = useState(false);

  // getCategories
  // Args - data: dict from API call to /outline
  //        suggestions: array of suggested checkboxes from ML model
  // Returns
  //  res.nodes: Nested array of nodes formatted for CheckboxTree, also includes
  //  array of ancestors with each node to make tree expansion easier
  //  res.set: Set of parent nodes for displaying tree with prechecked nodes
  function getCategories(data, suggestions) {
    const res = {};
    const result_nodes = [];
    const nodes = data.Nodes;
    const parentSet = new Set();

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
      result_nodes.push(recurse(node));
    });

    res.nodes = result_nodes;
    res.set = parentSet;

    return res;
  }

  function useAxiosPost() {
    const [ntsaResults, setNtsaResults] = useState(null);
    const [epaResults, setEpaResults] = useState(null);
    const [error, setError] = useState("");
    const [loaded, setLoaded] = useState(false);
    const categoriesPostedRef = useRef(false);

    useEffect(() => {
      if (!categoriesPostedRef.current) {
        categoriesPostedRef.current = true;
        axios
          .all([
            axios.post("https://emory.wolftechnology.net/services/outline/", {
              table: "SituationalOutline",
            }),
            axios.post("https://emory.wolftechnology.net/services/outline/", {
              table: "EPAOutline",
            }),
          ])
          .then(
            axios.spread((ntsa, epa) => {
              setNtsaResults(getCategories(ntsa.data, ntsaSuggestions));
              setEpaResults(getCategories(epa.data, epaSuggestions));
            })
          )
          .catch((error) => setError(error.message))
          .finally(() => setLoaded(true));
      }
    }, []);

    return { ntsaResults, epaResults, error, loaded };
  }

  const { ntsaResults, epaResults, error, loaded } = useAxiosPost();

  if (loaded) {
    if (ntsaResults) {
      if (ntsaCategories.length === 0) {
        setNtsaCategories(ntsaResults.nodes);
      }

      if (ntsaResults.set.size > 0 && ntsaExpanded.length === 0) {
        setNtsaExpanded(Array.from(ntsaResults.set));
      }
    }

    if (epaResults) {
      if (epaCategories.length === 0) {
        setEpaCategories(epaResults.nodes);
      }

      if (epaResults.set.size > 0 && epaExpanded.length === 0) {
        setEpaExpanded(Array.from(epaResults.set));
      }
    }
  }
  const overrides = {
    titleText: {
      children: content.title,
    },
    contentText: {
      children: content.text,
    },
    "Name of source29766863": {
      children: content.sourceName,
    },
    "Type of source40831002": {
      children:
        content.sourceType === "1" ? "Quiz bank item" : "Journal article",
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
        <h3 style={{ marginLeft: 20, marginBottom: 0 }}>Competency Mapping</h3>
        <Tabs justifyContent="flex-start">
          <TabItem title="NTSA">
            <div style={{ marginTop: 20, marginLeft: 20, marginBottom: 20 }}>
              <CheckboxTree
                nodes={ntsaCategories}
                checked={ntsaChecked}
                expanded={ntsaExpanded}
                onCheck={(ntsaChecked) => setNtsaChecked(ntsaChecked)}
                onExpand={(ntsaExpanded) => setNtsaExpanded(ntsaExpanded)}
                noCascade={true}
              />
            </div>
          </TabItem>
          <TabItem title="EPA">
            <div style={{ marginTop: 20, marginLeft: 20, marginBottom: 20 }}>
              <CheckboxTree
                nodes={epaCategories}
                checked={epaChecked}
                expanded={epaExpanded}
                onCheck={(epaChecked) => setEpaChecked(epaChecked)}
                onExpand={(epaExpanded) => setEpaExpanded(epaExpanded)}
                noCascade={true}
              />
            </div>
          </TabItem>
        </Tabs>
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
          <SaveMapping
            content={content}
            ntsaChecked={ntsaChecked}
            epaChecked={epaChecked}
          />
        ) : null}
      </>
    );
  }
  return <span>Loading...</span>;
}

export default SubmitMapping;
