import GroupCard from "../GroupCard";

import { ContainerGroups, ContainerStyled, ButtonStyled } from "./style.js";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

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
        <ButtonStyled onClick={handlePrev}>
          <ArrowBackIosIcon fontSize="large" color="primary" />
        </ButtonStyled>
      ) : (
        <ButtonStyled onClick={handlePrev} disabled>
          <ArrowBackIosIcon fontSize="large" color="gray" />
        </ButtonStyled>
      )}
      <ContainerGroups>
        {groups.map((group) => {
          return <GroupCard key={group.id} name={group.name} />;
        })}
      </ContainerGroups>
      {next !== null ? (
        <ButtonStyled onClick={handleNext}>
          <ArrowForwardIosIcon fontSize="large" color="primary" />
        </ButtonStyled>
      ) : (
        <ButtonStyled onClick={handleNext} disabled>
          <ArrowForwardIosIcon fontSize="large" color="gray" />
        </ButtonStyled>
      )}
    </ContainerStyled>
  );
};

export default AllGroups;
