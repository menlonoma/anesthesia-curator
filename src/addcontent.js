import React, { useState, useEffect } from "react";
import { AddContent as UIAdd } from "./ui-components";

function AddContent() {
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
  };

  return (
    <div>
      <UIAdd overrides={overrides} />
    </div>
  );
}

export default AddContent;
