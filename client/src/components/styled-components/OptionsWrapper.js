import styled from 'styled-components';

const OptionsWrapper = styled.div`
    display : flex;
    justify-content : space-around;
    margin : ${({margin}) => margin ? margin : '0px'}
    width : ${({width}) => width ? width : '120px'};
`
export default OptionsWrapper;