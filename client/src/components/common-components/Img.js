import styled from "styled-components";

const Img = styled.img`
width: ${({width}) => width};
height: ${({height}) => height};
border : ${({border}) => border ? '5px solid #0c0c47' : '0'};
border-radius:${({radius}) => radius};
    &:hover{
        width: ${({width, transform}) => transform ? parseInt(width) + 2 + 'px' : width};
        height: ${({height, transform}) => transform ? parseInt(height) + 2 + 'px' : height};
    }
`;
export default Img;
