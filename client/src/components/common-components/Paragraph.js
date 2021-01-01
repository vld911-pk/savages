import styled from 'styled-components';

const Paragraph = styled.p`
    font-family : cursor;
    font-size : 20px;
    color : ${({color}) => color ? color : 'black'};
`
export default Paragraph;