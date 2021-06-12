import ImageGroup from "../../assets/img/image_group.svg";

import { ContainerCard } from "./style.js";

const GroupCard = ({ name, handleClick }) => {
  return (
    <>
      <ContainerCard onClick={handleClick}>
        <figure>
          <img src={ImageGroup} alt="nome do grupo" />
        </figure>
        <p>{name}</p>
      </ContainerCard>
    </>
  );
};

export default GroupCard;
