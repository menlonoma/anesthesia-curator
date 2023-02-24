import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { AddContent as UIAdd } from "./ui-components";

function AddContent() {
  let navigate = useNavigate();

  const overrides = {
    TextField36642825: {
      placeholder: "Title",
    },
    TextAreaField: {
      placeholder: "Text",
    },
    TextField36642832: {
      placeholder: "Link",
    },
    Button37502745: {
      children: "Map",
      onClick: () => navigate("/map"),
    },
    Button37472748: {
      children: "Suggest mapping",
    },
  };

  return (
    <div>
      <UIAdd overrides={overrides} />
    </div>
  );
}

export default AddContent;
