import "./App.css";
import { useEffect, useState } from "react";
import SimpleNav from "./simplenav";
import TitleOnly from "./ui-components/TitleOnlyCardCollection";
import "react-checkbox-tree/lib/react-checkbox-tree.css";
import CheckboxTree from "react-checkbox-tree";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddContent from "./addcontent";

const data = {
  Nodes: [
    {
      Description: "Foundational",
      ItemID: 1,
      Nodes: [
        {
          Description: "Preoperative assessment and optimization",
          ItemID: 2,
          VisualID: "A.",
        },
        { Description: "Airway management", ItemID: 3, VisualID: "B." },
        { Description: "PACU management", ItemID: 4, VisualID: "C." },
        { Description: "Transfer of care", ItemID: 5, VisualID: "D." },
        { Description: "Postop follow-up", ItemID: 6, VisualID: "E." },
        {
          Description: "Leadership in managing a team",
          ItemID: 7,
          VisualID: "F.",
        },
        {
          Description: "Management of uncommon and rare events",
          ItemID: 8,
          VisualID: "G.",
        },
        {
          Description: "Management of perioperative complications",
          ItemID: 9,
          VisualID: "H.",
        },
      ],
      VisualID: "I.",
    },
    {
      Description: "Case-based Perioperative care of a patient presenting for:",
      ItemID: 10,
      Nodes: [
        {
          Description: "General operating room case",
          ItemID: 11,
          VisualID: "A.",
        },
        {
          Description: "Out-of-operating room case",
          ItemID: 12,
          VisualID: "B.",
        },
        { Description: "Pediatric surgery", ItemID: 13, VisualID: "C." },
        { Description: "Neonatal surgery", ItemID: 14, VisualID: "D." },
        { Description: "Labor analgesia", ItemID: 15, VisualID: "E." },
        { Description: "Cesarean section", ItemID: 16, VisualID: "F." },
        {
          Description: "Non-obstetric Surgery in a pregnant patient",
          ItemID: 17,
          VisualID: "G.",
        },
        {
          Description:
            "Surgery in a patient with substance use disorder or chronic opioid use",
          ItemID: 18,
          VisualID: "H.",
        },
        { Description: "Regional anesthesia", ItemID: 19, VisualID: "I." },
        { Description: "Cardiac Surgery", ItemID: 20, VisualID: "J." },
        {
          Description: "Non-Cardiac Thoracic Surgery",
          ItemID: 21,
          VisualID: "K.",
        },
        { Description: "Intracranial surgery", ItemID: 22, VisualID: "L." },
        { Description: "Major trauma surgery", ItemID: 23, VisualID: "M." },
        {
          Description: "Abdominal aortic aneurysm surgery",
          ItemID: 24,
          VisualID: "N.",
        },
      ],
      VisualID: "II.",
    },
    {
      Description: "Service-based and out of the operating room",
      ItemID: 25,
      Nodes: [
        {
          Description: "Management of acute pain out of the operating room",
          ItemID: 26,
          VisualID: "A.",
        },
        {
          Description:
            "Management of a non-operating room patient with chronic pain",
          ItemID: 27,
          VisualID: "B.",
        },
        {
          Description:
            "Critical care for patients outside of the operating room (ICU management)",
          ItemID: 28,
          VisualID: "C.",
        },
      ],
      VisualID: "III.",
    },
  ],
  Table: "EPAOutline",
};

// const nodes = [
//   {
//     value: "mars",
//     label: "Mars",
//     children: [
//       {
//         value: "phobos",
//         label: "Phobos",
//         children: [{ value: "chicken", label: "Chicken" }],
//       },
//       { value: "deimos", label: "Deimos" },
//     ],
//   },
// ];

function App() {
  const [checked, setChecked] = useState([]);
  const [expanded, setExpanded] = useState([]);
  const [categories, setCategories] = useState([]);

  // useEffect(() => {
  //   fetchCategories();
  // }, []);
  // useEffect(() => {
  //   console.log(categories);
  // }, [categories]);
  // const fetchCategories = async () => {
  //   const response = await getCategories();
  //   setCategories(response.data);
  // };

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
  console.log(categories);
  if (categories.length == 0) {
    setCategories(getCategories());
  }

  return (
    <>
      <Router>
        <SimpleNav />
        <Routes>
          <Route path="/" element={<TitleOnly />} />
          <Route path="/add" element={<AddContent />} />
        </Routes>
        <CheckboxTree
          nodes={categories}
          checked={checked}
          expanded={expanded}
          onCheck={(checked) => setChecked(checked)}
          onExpand={(expanded) => setExpanded(expanded)}
        />
      </Router>
    </>
  );
}

export default App;
