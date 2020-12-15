import styled from 'styled-components';

const TransparentBackground = styled.div`
   width : 100vw;
   height : 100vh;
   background-color : rgba(0,0,0,0.4);
   position : fixed;
   display : flex;
   align-items : center;
   justify-content : center;
   top : 0;
   left : 0;
   z-index : 1;
`
export default TransparentBackground;