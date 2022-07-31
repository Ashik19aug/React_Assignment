import React from 'react';
import {Flex, Text} from "@chakra-ui/react";
import {Cart, Phone} from "../../Svg/SvgIcon/SvgIcon";

const CartButton = () => {
    return (
        <>
            <Flex justifyContent={'center'} >
                <Flex bg={'black'} color={'white'} borderRadius={'full'} padding={'0.3rem'} flexDirection={'row'} mb={'1vh'}>
                    <Flex ml={'0.2rem'} mr={'0.2rem'} >
                        <Cart />
                    </Flex>
                    <Flex alignSelf={'center'}>
                        <Text fontSize={['0.4rem','0.5rem','0.6rem','0.7rem','0.8rem',]} > Add To Cart</Text>
                    </Flex>
                </Flex>
            </Flex>
        </>
    );
};

export default CartButton;
