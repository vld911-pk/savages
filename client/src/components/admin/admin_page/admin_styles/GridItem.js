import styled from "styled-components";

const GridItem = styled.div`
  border: 1px solid grey;
  height: 600px;
  text-align: center;

  &: hover {
    border: 3px solid #0c0c47;
  }
  &: nth-child(1) {
    border-radius: 20px 0px 0px 20px;
  }
  &: nth-last-child(-n+1) {
    border-radius: 0px 20px 20px 0px;
  }
`;
export default GridItem;
