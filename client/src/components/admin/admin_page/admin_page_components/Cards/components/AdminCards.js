import React, { useState } from "react";
import CardGame from "./CardGame";
import CardTest from "./CardTest";
import CardsGameWrapper from "../styles/CardsGameWrapper";

const types = {
  START_TYPE: 1,
  TEST_TYPE: 2,
  FINAL_TYPE: 3,
};

function AdminCards() {
  const [type, setType] = useState(types.START_TYPE);

  return (
    <>
        <CardsGameWrapper>
          {type === 1 ? (
            <CardGame setType={setType} />
          ) : (
            <CardTest setType={setType} />
          )}
        </CardsGameWrapper>
    </>
  );
}

export default AdminCards;
