import GroupCard from "../GroupCard";
import { ContainerGroups, ContainerStyled } from "./style.js";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import FloatButton from "../FloatButton";
import Modal from "../Modal";
import { useModal } from "../../contexts/Modal";
import { useGroups } from "../../contexts/Groups";

const AllGroups = () => {
  const { groups, handleNext, handlePrev, previous, next } = useGroups();
  const { isVisible, handleModal } = useModal();

  const handleClick = () => {
    handleModal();
  };

  return (
    <ContainerStyled>
      <FloatButton
        title="Voltar"
        icon={MdKeyboardArrowLeft}
        onClick={handlePrev}
        disabled={!previous ?? true}
      />
      <ContainerGroups>
        {groups.map((group) => {
          return (
            <GroupCard
              key={group.id}
              name={group.name}
              handleClick={handleClick}
            />
          );
        })}
      </ContainerGroups>
      <FloatButton
        title="Avançar"
        icon={MdKeyboardArrowRight}
        onClick={handleNext}
        disabled={!next ?? true}
      />
      {isVisible && <Modal>Teste</Modal>}
    </ContainerStyled>
  );
};

export default AllGroups;
