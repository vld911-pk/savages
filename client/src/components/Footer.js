import React from 'react';
import HtmlLink from './common-components/HtmlLink';
import Paragraph from './common-components/Paragraph';

import './Footer.css';

function Footer() {
    return (
        <>
            <div className="footer">
                <Paragraph><HtmlLink href="mailto:vlad30080081@gmail.com">Gmail</HtmlLink></Paragraph>
            </div>
        </>
    );
}
export default Footer;