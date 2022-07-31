import React from 'react';
import {Flex} from "@chakra-ui/react";
import {Phone} from "../../Svg/SvgIcon/SvgIcon";
import {GlobalStyle} from "../../GlobalStyles";



const HeaderButton = () => {
    return (
        <>
            <GlobalStyle.HeaderButtonContainer>
                <GlobalStyle.HeaderButton>
                    <GlobalStyle.HeaderButtonIcon>
                        <Phone />
                    </GlobalStyle.HeaderButtonIcon>
                    <Flex>
                        <GlobalStyle.HeaderButtonText> 09678667788</GlobalStyle.HeaderButtonText>
                    </Flex>
                </GlobalStyle.HeaderButton>
            </GlobalStyle.HeaderButtonContainer>
        </>
    );
};

export default HeaderButton;
