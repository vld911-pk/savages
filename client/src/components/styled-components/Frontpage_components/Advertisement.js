import React from "react";

import Img from "../../common-components/Img";
import Advert from "./front_styles/Advert";
import AdvertItem from "./front_styles/AdvertItem";

function Advertisement() {
  return (
    <>
      <Advert>
        <AdvertItem cstart={1} cend={3} rstart={1} rend={3} src={'/img/dominic.jpg'} ></AdvertItem> 
        <AdvertItem cstart={3} cend={4} rstart={1} rend={2} />
        <AdvertItem cstart={3} cend={4} rstart={2} rend={3} />
      </Advert>
    </>
  );
}
export default Advertisement;
