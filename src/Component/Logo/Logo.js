import React from 'react';
import { Image} from "@chakra-ui/react";
import {HeaderLogo} from "../../Asset";
import {GlobalStyle} from "../../GlobalStyles";

const Logo = () => {
    return (
        <>
            <GlobalStyle.LogoContainer>
                <GlobalStyle.LogoPosition>
                    <Image src={HeaderLogo} w={'100%'} h={'100%'} alt='Header Logo' />
                </GlobalStyle.LogoPosition>
            </GlobalStyle.LogoContainer>
        </>
    );
};

export default Logo;
