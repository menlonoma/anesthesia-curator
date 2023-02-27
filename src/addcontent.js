import React from "react";
import { useNavigate } from "react-router";
import { AddContent as UIAdd } from "./ui-components";

function AddContent({ content, setContent }) {
  let navigate = useNavigate();

  function handleTitleChange(e) {
    setContent({
      ...content,
      title: e.target.value,
    });
  }

  function handleTextChange(e) {
    setContent({
      ...content,
      text: e.target.value,
    });
  }

  function handleLinkChange(e) {
    setContent({
      ...content,
      link: e.target.value,
    });
  }

  const overrides = {
    TextField36642825: {
      placeholder: "Title",
      value: content.title,
      onChange: handleTitleChange,
    },
    TextAreaField: {
      placeholder: "Text",
      value: content.text,
      onChange: handleTextChange,
    },
    TextField36642832: {
      placeholder: "Link",
      value: content.link,
      onChange: handleLinkChange,
    },
    Button37502745: {
      children: "Map",
      onClick: () => navigate("/submit"),
    },
    Button37472748: {
      children: "Suggest mapping",
      onClick: () => navigate("/suggest"),
    },
  };

  return (
    <div>
      <UIAdd overrides={overrides} />
    </div>
  );
}

export default AddContent;
