import styled from 'styled-components';

const ErrorPopUp = styled.div`
    width  : ${props => props.width};
    height : ${props => props.height};
    border : 1px solid #f05959;
    background-color: #ff9292;
    color : #4d452f;    
    border-radius : 0px;
    opacity : 0.8;
    text-align : center;
    font-size : 25px;
    color : black;
    margin : 8px;
    padding : 3px;
`
export default ErrorPopUp;