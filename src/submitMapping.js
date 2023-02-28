import React, { useState } from "react";
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

function SubmitMapping({ content, suggestions }) {
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState(suggestions);
  const [expanded, setExpanded] = useState([]);

  function getCategories() {
    const res = [];
    const api_call_json = data;
    const nodes = api_call_json.Nodes;

    function recurse(obj) {
      const category = {};
      category.value = obj.ItemID;
      category.label = obj.VisualID + " " + obj.Description;
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

  if (categories.length === 0) {
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

  return (
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
        style={{ marginLeft: 20, marginTop: 20 }}
        {...getOverrideProps(overrides, "Submit")}
      />
    </>
  );
}

export default SubmitMapping;
