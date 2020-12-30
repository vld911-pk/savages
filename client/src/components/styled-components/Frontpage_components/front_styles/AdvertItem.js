import styled from 'styled-components';

const AdvertItem = styled.div`
    border : 1px solid #0c0c47;
    grid-column : ${({cstart, cend}) => `${cstart} / ${cend}`};
    grid-row : ${({rstart, rend}) => `${rstart} / ${rend}`};
`
export default AdvertItem;