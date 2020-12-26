import styled from 'styled-components';

const ErrorPopUp = styled.div`
    width  : ${props => props.width};
    height : ${props => props.height};
    background-color : red;
    border : 2px solid #0c0c47;
    border-radius : 20px;
    opacity : 0.8;
    text-align : center;
    margin : 10px;
    padding : 3px;
`
export default ErrorPopUp;