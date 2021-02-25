import styled from 'styled-components';

const StyledModalWindow = styled.div`
    position : absolute;
    display : flex;
    flex-direction : column;
    text-align : center;
    align-items : center;
    justify-content : space-between;
    width  : ${({width}) => width ? width : '40%'};
    min-width : 270px;
    height : auto;
    min-height : 350px;
    border : 10px solid ${({err}) => err ? '#FF0000' : `#0c0c47`};
    border-radius : 10px;
    background-color : white;
    padding : 20px;
    align-items : center;
    text-align : center; 
`
export default StyledModalWindow;