import React from 'react';

import CardGame from './styled-components/Frontpage_components/CardGame';

import H1 from './common-components/H1';
import FrontWrapper from '../components/styled-components/FrontWrapper';

function Front() {
    return (
        <FrontWrapper>
            <H1>Test your memory here</H1>
            <CardGame />
        </FrontWrapper>
    );
}
export default Front;