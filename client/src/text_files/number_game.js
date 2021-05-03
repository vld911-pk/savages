import React from 'react';
import styled from 'styled-components';

const P = styled.p`
    color : red;
`

const makeP = (text) => {
   return <P>{text}</P>;
}


export const     numsInfo = `first of all you have to choose the ${makeP('complexity')} of task:
    1 (primary) - numbers : 0 - 20;
    2 (medium)  - numbers : 10 - 99;
    3 (hard)    - numbers : 100 - 999

second step would be the count of tasks choose 
then define the time to resolve the task
`;