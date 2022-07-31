import React from 'react';
import {Divider, Flex} from "@chakra-ui/react";
import {GlobalStyle} from "../../GlobalStyles";

const ProductHeaderTitle = () => {
    return (
        <>
            <GlobalStyle.ProductHeaderTitleContainer>
                <Flex>
                    <GlobalStyle.ProductHeaderTitleText>Feature Product</GlobalStyle.ProductHeaderTitleText>
                </Flex>
                <Flex bg={'black'} w={'100%'}>
                    <Divider  orientation='horizontal' />
                </Flex>
            </GlobalStyle.ProductHeaderTitleContainer>

        </>
    );
};

export default ProductHeaderTitle;
