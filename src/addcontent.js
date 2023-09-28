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

  function handleSourceNameChange(e) {
    setContent({
      ...content,
      sourceName: e.target.value,
    });
  }

  function handleSourceTypeChange(e) {
    setContent({
      ...content,
      sourceType: e.target.value,
    });
  }
  function handleLinkChange(e) {
    setContent({
      ...content,
      link: e.target.value,
    });
  }

  const overrides = {
    "Add new content": {
      fontSize: "50px",
      fontWeight: "100",
      children: "Add New Content",
      padding: "30px 0px 40px 0px",
    },
    TextField36642825: {
      label: "Title",
      placeholder: "",
      value: content.title,
      onChange: handleTitleChange,
    },
    TextAreaField: {
      label: "Text",
      placeholder: "",
      height: "unset",
      resize: "both",
      value: content.text,
      onChange: handleTextChange,
    },
    TextField36642832: {
      value: content.sourceName,
      label: "Name of source",
      onChange: handleSourceNameChange,
    },
    SelectField: {
      value: content.sourceType,
      isRequired: true,
      label: "Type of source",
      placeholder: "Select one",
      children: (
        <>
          <option value="Quiz bank item">Quiz bank item</option>
          <option value="Journal article">Journal article</option>
        </>
      ),
      onChange: handleSourceTypeChange,
    },
    TextField4050385: {
      value: content.link,
      label: "Link",
      placeholder: "example.com",
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
