import React, { useState, useEffect, useMemo, useRef } from "react";
import axios from "axios";

function SaveMapping({ content, ntsaChecked, epaChecked }) {
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
    }, [url, payload, headers]);

    return { data, error, loaded };
  };

  const skills = [];

  ntsaChecked.forEach((element) => {
    const obj = { SkillType: 3, SkillId: parseInt(element), PrimarySkill: 1 };
    skills.push(obj);
  });

  epaChecked.forEach((element) => {
    const obj = { SkillType: 2, SkillId: parseInt(element), PrimarySkill: 1 };
    skills.push(obj);
  });

  const apidata = JSON.stringify({
    SourceId: content.sourceName,
    Id: "Test_web_app",
    ResourceType: Number(content.sourceType),
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
