import styled from "styled-components";

export const Passers = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid grey;
  width: 100%;
  height: 25px;
  margin: 5px;
  border-radius: 5px;
  box-shadow: 1px 1px;
`;

export const Scrum = styled.div`
  width: 20px;
  margin: 4px 3px;
  border: 1px solid grey;
  border-radius: 5px;
  background-color:  ${({ background }) => {
    switch(background){
      case 0: return 'white';
      case 1: return 'green';
      case 2: return 'red';
    }
  }};
`;
