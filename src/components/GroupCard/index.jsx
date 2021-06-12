import ImageGroup from "../../assets/img/image_group.svg";

import { ContainerCard } from "./style.js";

const GroupCard = ({ name }) => {
  return (
    <>
      <ContainerCard>
        <figure>
          <img src={ImageGroup} alt="nome do grupo" />
        </figure>
        <h4>{name.length > 10 ? `${name.substring(0, 10)} [...]` : name} </h4>
      </ContainerCard>
    </>
  );
};

export default GroupCard;