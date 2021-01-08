import styled from 'styled-components';

const Paragraph = styled.p`
    font-family : cursor;
    font-size : ${({font}) => font ? font : '20px'};
    color : ${({color}) => color ? color : 'black'};
    margin : ${({params}) => params ? `${params}` : '0'};
`
export default Paragraph;