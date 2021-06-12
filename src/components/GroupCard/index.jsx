import ImageGroup from "../../assets/img/image_group.svg";

import { ContainerCard } from "./style.js";

const GroupCard = ({ name, handleClick }) => {
  return (
    <>
      <ContainerCard onClick={handleClick}>
        <figure>
          <img src={ImageGroup} alt="nome do grupo" />
        </figure>
        {/* <h4>{name.length > 10 ? `${name.substring(0, 10)} [...]` : name} </h4> */}
        <p>{name}</p>
      </ContainerCard>
    </>
  );
};

export default GroupCard;
