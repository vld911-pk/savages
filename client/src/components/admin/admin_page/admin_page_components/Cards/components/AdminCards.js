import React, { useState } from "react";
import CardGame from "./CardGame";
import CardTest from "./CardTest";
import CardResult from "./CardsResults";
import CardsGameWrapper from "../styles/CardsGameWrapper";

const types = {
  START_TYPE: 1,
  TEST_TYPE: 2,
  FINAL_TYPE: 3,
};

function AdminCards() {
  const [type, setType] = useState(types.START_TYPE);
  const [sessionResults, setSessionResults] = useState(0);

  const renderComponents = (type) => {
    switch(type){
      case 1: return <CardGame setType={setType} />;
      case 2: return <CardTest setType={setType} setSessionResults={setSessionResults}/>;
      case 3: return <CardResult setType={setType} res={sessionResults}/>;
      default : return null;
    }
  }

  return (
    <>
        <CardsGameWrapper>
           {renderComponents(type)}
        </CardsGameWrapper>
    </>
  );
}

export default AdminCards;
