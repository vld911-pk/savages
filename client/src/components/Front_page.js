import React from 'react';

import Advertisement from './styled-components/Frontpage_components/Advertisement';

import H1 from './common-components/H1';
import FrontWrapper from '../components/styled-components/FrontWrapper';

function Front() {
    return (
        <FrontWrapper>
            <H1>Test your memory here</H1>
            <Advertisement />
        </FrontWrapper>
    );
}
export default Front;