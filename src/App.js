import "./App.css";
import { useState } from "react";
import SimpleNav from "./ui-components/SimpleNav";
import TitleOnly from "./ui-components/TitleOnlyCardCollection";
import "react-checkbox-tree/lib/react-checkbox-tree.css";
import CheckboxTree from "react-checkbox-tree";

function App() {
  const nodes = [
    {
      value: "mars",
      label: "Mars",
      children: [
        { value: "phobos", label: "Phobos" },
        { value: "deimos", label: "Deimos" },
      ],
    },
  ];

  const [checked, setChecked] = useState([]);
  const [expanded, setExpanded] = useState([]);

  return (
    <>
      <SimpleNav />
      <TitleOnly />
      <CheckboxTree
        nodes={nodes}
        checked={checked}
        expanded={expanded}
        onCheck={(checked) => setChecked({ checked })}
        onExpand={(expanded) => setExpanded({ expanded })}
      />
    </>
  );
}

export default App;
