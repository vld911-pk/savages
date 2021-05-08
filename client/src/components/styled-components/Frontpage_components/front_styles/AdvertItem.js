import styled from "styled-components";

const AdvertItem = styled.div`
  border: 1px solid #0c0c47;
  grid-column: ${({ cstart, cend }) => `${cstart} / ${cend}`};
  grid-row: ${({ rstart, rend }) => `${rstart} / ${rend}`};
  box-shadow: 10px 10px 10px;
  background-image: url(${({src}) => src ? src : ''});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: inline-block;
    &: hover {
        border-bottom: 3px solid #0c0c47;
        border-right: 3px solid #0c0c47;
    };
`;
export default AdvertItem;
