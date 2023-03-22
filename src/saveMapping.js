import React, { useState, useEffect, useMemo, useRef } from "react";
import axios from "axios";

function SaveMapping({ content, checked }) {
  const useAxiosPost = (url, payload, headers) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const [loaded, setLoaded] = useState(false);
    const dataPostedRef = useRef(false);

    useEffect(() => {
      if (!dataPostedRef.current) {
        dataPostedRef.current = true;
        axios
          .post(url, payload, headers)
          .then((response) => setData(response.data))
          .catch((error) => setError(error.message))
          .finally(() => setLoaded(true));
      }
    }, []);

    return { data, error, loaded };
  };

  const skills = [];

  checked.forEach((element) => {
    const obj = { SkillType: 3, SkillId: parseInt(element), PrimarySkill: 1 };
    skills.push(obj);
  });

  const apidata = JSON.stringify({
    SourceId: "User Input test",
    Id: "Test_web_app",
    ResourceType: 2,
    ResourceLocation: content.link,
    ResourceTitle: content.title,
    ResourceDescription: content.text,
    CuratorId: "test user",
    Skills: skills,
  });

  const { data, error, loaded } = useAxiosPost(
    "https://emory.wolftechnology.net/services/resourcein/",
    apidata
  );

  const stringifiedData = useMemo(() => {
    return JSON.stringify(data || {});
  }, [data]);

  if (loaded) {
    return error ? (
      <span>Error: {error}</span>
    ) : (
      <>
        <p>{stringifiedData}</p>
      </>
    );
  }
  return <span>Loading...</span>;
}

export default SaveMapping;
