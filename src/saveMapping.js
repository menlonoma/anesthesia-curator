import React, { useState, useEffect, useMemo, useRef } from "react";
import axios from "axios";

function SaveMapping({ content }) {
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

  // for debugging
  // axios.interceptors.request.use((request) => {
  //   console.log("Starting Request", JSON.stringify(request, null, 2));
  //   return request;
  // });

  const apidata = JSON.stringify({
    SourceId: "User Input test",
    Id: "Test_web_app",
    ResourceType: 2,
    ResourceLocation: content.link,
    ResourceTitle: content.title,
    ResourceDescription: content.text,
    CuratorId: "test user",
    Skills: [{ SkillType: 3, SkillId: 3, PrimarySkill: 1 }],
  });

  console.log(apidata);
  const { data, error, loaded } = useAxiosPost(
    "https://emory.wolftechnology.net/services/resourcein/",
    apidata
  );

  const stringifiedData = useMemo(() => {
    return JSON.stringify(data || {});
  }, [data]);

  // TODO: Memoize suggestions

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
