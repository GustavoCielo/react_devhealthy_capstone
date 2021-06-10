import GroupCard from "../GroupCard";

import { ContainerGroups, ContainerStyled } from "./style.js";

import api from "../../services/api";
import { useState } from "react";
import { useEffect } from "react";

const AllGroups = () => {
  const [groups, setGroups] = useState([]);
  const [url] = useState("/groups/");
  const [next, setNext] = useState("");
  const [previous, setPrevious] = useState("");

  const getGroups = (url) => {
    api
      .get(url)
      .then((res) => {
        setGroups(res.data.results);
        setNext(res.data.next);
        setPrevious(res.data.previous);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getGroups(url);
  }, []);

  const handleNext = () => {
    getGroups(next);
  };

  const handlePrev = () => {
    if (previous !== null) {
      getGroups(previous);
    }
  };

  return (
    <ContainerStyled>
      {previous !== null ? (
        <button onClick={handlePrev}>Voltar</button>
      ) : (
        <button onClick={handlePrev} disabled>
          Voltar
        </button>
      )}
      <ContainerGroups>
        {groups.map((group) => {
          return <GroupCard key={group.id} name={group.name} />;
        })}
      </ContainerGroups>
      {next !== null ? (
        <button onClick={handleNext}>Avançar</button>
      ) : (
        <button onClick={handleNext} disabled>
          Avançar
        </button>
      )}
    </ContainerStyled>
  );
};

export default AllGroups;
