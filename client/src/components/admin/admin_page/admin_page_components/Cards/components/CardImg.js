import React from "react";
import proptypes from "prop-types";
import Img from "../../../../../common-components/Img";

const CardImg = ({ src, alt }) => {
  return <Img src={src} alt={alt} />;
};

CardImg.propTypes = {
  src: proptypes.string,
};

CardImg.propTypes = {
  src: "",
};

export default CardImg;
