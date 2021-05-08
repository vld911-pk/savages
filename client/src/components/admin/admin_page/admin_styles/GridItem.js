import styled from "styled-components";

const GridItem = styled.div`
  border: 1px solid grey;
  height: 600px;
  text-align: center;
  box-shadow:5px 5px 5px;
  background-image: url(${({src}) => src ? src : ''});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  &: hover {
    border-bottom: 3px solid #000;
    border-right: 3px solid #000;
  }
  &: nth-child(1) {
    border-radius: 20px 0px 0px 20px;
  }
  &: nth-last-child(-n+1) {
    border-radius: 0px 20px 20px 0px;
  }
`;
export default GridItem;
