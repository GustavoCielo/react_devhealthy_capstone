import GroupCard from "../GroupCard";
import { ContainerGroups, ContainerStyled, InternContainer } from "./style.js";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import FloatButton from "../FloatButton";
import Modal from "../Modal";
import Button from "../Button";
import api from "../../services/api.js";
import { useModal } from "../../contexts/Modal";
import { useGroups } from "../../contexts/Groups";
import image_group from "../../assets/img/image_group.svg";
import { useState } from "react";

const AllGroups = () => {
  const { groups, handleNext, handlePrev, previous, next } = useGroups();
  const { isVisible, handleModal } = useModal();
  const [modalInfo, setModalInfo] = useState();

  const handleClick = (info) => {
    setModalInfo(info);
    handleModal();
  };

  const handleEnterGroup = (id) => {
    const token = JSON.parse(localStorage.getItem("@Dev:token"));

    //https://kabit-api.herokuapp.com/groups/26/subscribe/
    api
      .post(`https://kabit-api.herokuapp.com/groups/${id}/subscribe/`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
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
              handleClick={() =>
                handleClick({
                  id: group.id,
                  name: group.name,
                  description: group.description,
                  category: group.category,
                })
              }
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
      {isVisible && (
        <Modal>
          <InternContainer>
            <div className="Header">
              <figure>
                <img src={image_group} alt="logo" />
              </figure>
              <h4>{modalInfo.name}</h4>
            </div>
            <div className="Body">
              <p>
                <span>descrição:</span> {modalInfo.description}
              </p>
              <p>
                <span>categoria:</span> {modalInfo.category}
              </p>
            </div>
            <Button
              color="secondary"
              onClick={() => handleEnterGroup(modalInfo.id)}
            >
              Entrar
            </Button>
          </InternContainer>
        </Modal>
      )}
    </ContainerStyled>
  );
};

export default AllGroups;
