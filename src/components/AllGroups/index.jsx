import GroupCard from "../GroupCard";

import api from "../../services/api";
import { useState } from "react";
import { useEffect } from "react";

const AllGroups = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    api
      .get("/groups/")
      .then((res) => {
        setGroups(res.data.results);
      })
      .catch((err) => console.log(err));
  }, [groups]);

  return (
    <div>
      <div>
        {groups.map((group) => {
          return <GroupCard key={group.id} name={group.name} />;
        })}
      </div>
    </div>
  );
};

export default AllGroups;
