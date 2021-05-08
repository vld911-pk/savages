import React from "react";
import proptypes from "prop-types";
import Img from "../../../../../common-components/Img";

const CardImg = ({ src, alt, width, height, border=true, opacity=false }) => {
  return <Img 
      src={src} 
      alt={alt} 
      width={width} 
      height={height} 
      border={border} 
      radius={'20px'}
      shadow={true}
      draggable={false}
    />;
};

CardImg.propTypes = {
  src: proptypes.string,
  border: proptypes.bool,
  width: proptypes.string.isRequired,
  height: proptypes.string.isRequired,
  opacity: proptypes.bool,
};

CardImg.propTypes = {
  src: "",
  border: 0,
  width: '90px',
  height: '135px',
  opacity: false,
};

export default CardImg;
