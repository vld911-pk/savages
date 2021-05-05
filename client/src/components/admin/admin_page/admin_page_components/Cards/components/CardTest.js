import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import propTypes from "prop-types";
import styled from "styled-components";
import CardImg from "../components/CardImg";
import ModalWindow from "../../../../../ModalTools/ModalWindow";
import { Passers, Scrum } from "../styles/Passers";
import { link_domain } from "../config/cardLinks";
import { deleteCardsAction } from "../../../../../../actions/cardsAction";


const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CardImgWrapper = styled.div`
  margin: 5px;
`;

const CardTest = ({ card_links }) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  const [passed, setPassed] = useState([]);
  const [modalInfo, setModalInfo] = useState(false);

  const cardComparizor = (chosen_card) => {
    const card = chosen_card ? card_links[count].split(".")[0]: null;
    return card === chosen_card ? 1 : 2; // 2 - inccorect 1 - correct
  };

  useEffect(() => {
    if(count === card_links.length) {
      dispatch(deleteCardsAction())
      setModalInfo(true);
    } 
  }, [count])

  return (
    <>
      <CardWrapper>
        <Passers>
          {card_links.map((v, index) => {
            return <Scrum background={passed[index] ? passed[index] : 0} />;
          })}
        </Passers>
        <div style={{ display: "flex" }}>
          {card_links.map((v) => {
            const cardName = v.split(".")[0];
            return (
              <CardImgWrapper
                onClick={() => {
                  Promise.all([
                    setPassed((prev) => [...prev, cardComparizor(cardName)]),
                    setCount((prev) => ++prev),
                  ]);
                }}
              >
                <CardImg
                  src={`${link_domain}${v}`}
                  title={cardName}
                  alt={cardName}
                  width={"90px"}
                  heigth={"135px"}
                />
              </CardImgWrapper>
            );
          })}
        </div>
      </CardWrapper>
      {
        modalInfo && <ModalWindow info={'cardGame'} setModalInfo={setModalInfo} />
      }
    </>
  );
};

CardTest.propTypes = {
  card_links: propTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  card_links: state.card_links.card_links,
});

export default connect(mapStateToProps)(CardTest);
