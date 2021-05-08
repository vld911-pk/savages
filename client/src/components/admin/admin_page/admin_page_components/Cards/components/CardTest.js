import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import propTypes from "prop-types";
import styled from "styled-components";
import CardImg from "../components/CardImg";
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

const BottomComponent = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(${({ver}) => !ver ? 9 : 8}, 1fr);
  grid-gap: 5px;
  left: 0px;
  top: 0px;
  margin: 10px auto;
  overflow-y: auto;
`;

const CardTest = ({ card_links, setType, setSessionResults }) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  const [passed, setPassed] = useState([]);
  const [results, setResults] = useState(0);

  const cardComparizor = (chosen_card) => {
    const card = chosen_card ? card_links[count].split(".")[0]: null;
    return card === chosen_card ? 1 : 2; // 2 - inccorect 1 - correct
  };
  const handleResult = async (value) => {
    await setResults(prev => value === 1 ? prev + 50 : prev - 50);
  }
  useEffect(() => {
    if(count === card_links.length) {
      dispatch(deleteCardsAction());
      Promise.all([setType(prev => ++prev), setSessionResults(results)]);
    } 
  }, [count]);

  return (
    <>
      <CardWrapper>
        <Passers>
          {card_links.map((v, index) => {
            return <Scrum background={passed[index] ? passed[index] : 0} />;
          })}
        </Passers>
        <BottomComponent ver={navigator.appVersion.indexOf("Linux") != - 1}>
          {card_links.map((v) => {
            const cardName = v.split(".")[0];
            return (
              <CardImgWrapper
                onClick={() => {
                  Promise.all([
                    setPassed((prev) => [...prev, cardComparizor(cardName)]),
                    setCount((prev) => ++prev),
                    handleResult(cardComparizor(cardName)),
                  ]);
                }}
              >
                <CardImg
                  src={`${link_domain}${v}`}
                  title={cardName}
                  alt={cardName}
                  width={"110px"}
                  heigth={"155px"}
                  border={true}
                />
              </CardImgWrapper>
            );
          })}
        </BottomComponent>
      </CardWrapper>
    </>
  );
};

CardTest.propTypes = {
  card_links: propTypes.array.isRequired,
  setType: propTypes.func.isRequired,
  setSessionResults: propTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  card_links: state.card_links.card_links,
});

export default connect(mapStateToProps)(CardTest);
