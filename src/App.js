import "./App.css";
import { useState } from "react";
import SimpleNav from "./simplenav";
import TitleOnly from "./ui-components/TitleOnlyCardCollection";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddContent from "./addcontent";
import SubmitMapping from "./submitMapping";
import SuggestMapping from "./suggestMapping";

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
  const [content, setContent] = useState({ title: "", text: "", link: "" });

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

  return (
    <>
      <Router>
        <SimpleNav />
        <Routes>
          <Route path="/" element={<TitleOnly />} />
          <Route
            path="/add"
            element={<AddContent content={content} setContent={setContent} />}
          />
          <Route path="/submit" element={<SubmitMapping content={content} />} />
          <Route
            path="/suggest"
            element={<SuggestMapping content={content} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
