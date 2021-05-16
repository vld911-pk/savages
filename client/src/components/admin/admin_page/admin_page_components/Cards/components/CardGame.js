import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import CardImg from "./CardImg";
import LeftBar from "../styles/LeftBar";
import Panel from "./RigthPanel";
import ModalWindow from "../../../../../ModalTools/ModalWindow";
import CurrentCard from "../styles/CurrentCardComponent";
import {
  link_domain,
  links,
  flippedCard,
  cardNames,
} from "../config/cardLinks";
import { cardsAction } from "../../../../../../actions/cardsAction";
import { Button } from "react-bootstrap";
import Paragraph from "../../../../../common-components/Paragraph";

function CardGame({ setType }) {
  const dispatch = useDispatch();
  const [slinks, setSlinks] = useState(links.slice(0, 3));
  const [cardIndex, setCardIndex] = useState(1);
  const [nextButtonDisable, setNextButtonDisable] = useState(false);
  const [modalInfo, setModalInfo] = useState(false);
  const cardName = slinks[cardIndex].split(".")[0];

  const handleNextCard = () => {
    if (cardIndex === 0) return;
    if (slinks[cardIndex] === slinks[slinks.length - 1]) {
      Promise.all([setCardIndex(0), setNextButtonDisable(true)]);
      setTimeout(() => {
        setType((prev) => ++prev);
      }, 2000);
    } else {
      setCardIndex((prev) => ++prev);
    }
  }

  useEffect(() => {
    // we dont need a first card, cuz its trevolta
    dispatch(cardsAction(slinks.slice(1)));
  }, []);

  return (
    <>
      <LeftBar>
        <div>
          <CardImg
            src={`${link_domain}${'Back.png'}`}
            alt={cardName}
            title={cardName}
            width={"180px"}
            height={"270px"}
          />
          <Paragraph color={"rgb(12, 12, 71)"}>
            Cards left: {!cardIndex ? 0 : slinks.length - cardIndex}
          </Paragraph>
        </div>
        <Button
          variant={!nextButtonDisable ? "outline-primary" : "outline-secondary"}
          style={{ height: "50px" }}
          disabled={nextButtonDisable}
          tabIndex={"0"}
          onClick={handleNextCard}
          onKeyDown={(e) => console.log(e)}
        >
          Next Card
        </Button>
      </LeftBar>
      <CurrentCard>
        <CardImg
          src={`${link_domain}${slinks[cardIndex]}`}
          alt={cardName}
          title={cardNames[slinks[cardIndex]]}
          width={"360px"}
          height={"540px"}
        />
      </CurrentCard>
      <div>
        <Panel setModalInfo={setModalInfo} />
        <br />
      </div>
      {modalInfo && (
        <ModalWindow info={"start component"} setModalInfo={setModalInfo} />
      )}
    </>
  );
}

export default CardGame;
