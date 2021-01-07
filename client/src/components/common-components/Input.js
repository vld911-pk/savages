import styled from 'styled-components';

const Input = styled.input`
   width : ${({width}) => width};
   height : ${({height}) => height}; 
   text-align : center;
   -moz-user-select: none;  
   font-size : ${({font}) => font};
   margin : 30px;
`
export default Input;