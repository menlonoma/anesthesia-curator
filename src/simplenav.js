import React, { useState, useEffect } from "react";
import { SimpleNav as UINavBar } from "./ui-components";
import { useNavigate } from "react-router";
import { Divider, Menu, MenuItem } from "@aws-amplify/ui-react";

function SimpleNav({ signOut }) {
  let navigate = useNavigate();

  const overrides = {
    Button37472737: {
      onClick: () => navigate("/"),
    },
    Button37472744: {
      onClick: () => navigate("/add"),
    },
    Button37542827: {
      children: "Sign out",
      onClick: () => signOut(),
    },
  };

  return (
    <div>
      <UINavBar overrides={overrides} />
      <Divider />
    </div>
  );
}

export default SimpleNav;
