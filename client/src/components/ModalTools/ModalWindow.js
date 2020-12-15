import React from 'react';
import StyledModalWindow from '../styled-components/ModalWindow';
import CustomButton from '../common-components/Button';
import TransparentBackground from '../styled-components/TransparentBackground';
import Paragraph from '../common-components/Paragraph';

const ModalWindow = ({ setModalInfo }) => {
    return (
        <React.Fragment>
            <TransparentBackground onClick={() => setModalInfo(false)}>
                <StyledModalWindow onClick={e => e.stopPropagation()}>

                    <Paragraph> 
                        Hi ,glad to represent demo vesion of my memory training cite!
                        Hope you will enjoy playing this memory card game and improve 
                        your brain skills
                    </Paragraph>

                    <CustomButton onClick={() => setModalInfo(false)} width={'100px'} variant="outline-info" > Close </CustomButton>
                </StyledModalWindow>
            </TransparentBackground>
        </React.Fragment>
    );
}

export default ModalWindow;