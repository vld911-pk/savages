import styled from "styled-components";

const Img = styled.img`
width: ${({width}) => width};
height: ${({height}) => height};
border: ${({border}) => border ? '3px solid #0c0c47' : '0'};
opacity: ${({opacity}) => opacity ? '0.5' : '1'};
border-radius:${({radius}) => radius};
    &:hover{
        width: ${({width, transform}) => transform ? parseInt(width) + 2 + 'px' : width};
        height: ${({height, transform}) => transform ? parseInt(height) + 2 + 'px' : height};
        box-shadow : ${({shadow}) => shadow ? '3px 3px 3px': '0px'};
    }
`;
export default Img;
