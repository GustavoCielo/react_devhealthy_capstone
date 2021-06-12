import GroupCard from "../GroupCard";
import {
  ContainerGroups,
  ContainerStyled,
  InternContainer,
  useStyles,
} from "./style.js";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Backdrop from "@material-ui/core/Backdrop";

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
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleClick = (info) => {
    setModalInfo(info);
    handleModal();
  };

  const handleClose = () => {
    handleModal();
    handleToggle();
  };

  const handleEnterGroup = (id) => {
    const token = JSON.parse(localStorage.getItem("@Dev:token"));
    api
      .post(`https://kabit-api.herokuapp.com/groups/${id}/subscribe/`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

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

            <Button color="secondary" onClick={handleToggle}>
              Entrar
            </Button>
            <Backdrop className={classes.backdrop} open={open}>
              <div>
                <p>Confirma a entrada no grupo?</p>
                <div>
                  <Button onClick={handleClose}>Não</Button>
                  <Button
                    onClick={() => handleEnterGroup(modalInfo.id)}
                    color="secondary"
                  >
                    Sim
                  </Button>
                </div>
              </div>
            </Backdrop>
          </InternContainer>
        </Modal>
      )}
    </ContainerStyled>
  );
};

export default AllGroups;
