import styled from "styled-components";

const Advert = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 15px;
  grid-row-gap: 15px;
  position : relative;
  height : 500px;
  padding: 5px;
  margin-left: 17%;
  margin-right: 17%;
  top : 50px;
`;
export default Advert;
