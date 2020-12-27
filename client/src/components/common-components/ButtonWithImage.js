import styled from "styled-components";

const ButtonWithImage = styled.button`
  width: ${({width}) => width};
  height: ${({height}) => height};
  margin-right : 5px;
  margin-left : 5px;
  background: none;
  border: 0;
`;
export default ButtonWithImage;
