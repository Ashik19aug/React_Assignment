import React from 'react';
import {GlobalStyle} from "../../GlobalStyles";
import {HeaderButton, Logo} from "../../Component";

const Header = () => {
    return (
        <>
            <GlobalStyle.HeaderContainer>
                <Logo/>
                <HeaderButton/>
            </GlobalStyle.HeaderContainer>

        </>
    );
};

export default Header;
