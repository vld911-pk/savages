import CustomButton from './common-components/Button';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import './NavBar.css';
import SignBtn from './Nav_components/Sign_Button';
import NavInformWrapper from './styled-components/NavInformWrapper';
import ModalWindow from './ModalTools/ModalWindow';


function NavBar() {
    let history = useHistory();
    const [modalInfo, setModalInfo] = useState(false);

    return (
        <>
            <div className="navbar">
                <div className="logo-wrapper">
                    <h1 className="logo" onClick={() => { history.push('/') }}>FS</h1>
                </div>
                <NavInformWrapper>
                    <CustomButton width={'80px'} variant="outline-primary" onClick={() => setModalInfo(true)}> Info </CustomButton>
                </NavInformWrapper>
                {
                    modalInfo
                    && (
                        <ModalWindow modalInfo={modalInfo} setModalInfo={setModalInfo} />
                    )
                }
                <NavLink to="/login"><SignBtn /></NavLink>
            </div>
        </>
    );
}
export default NavBar;