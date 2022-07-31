import React from 'react';
import { Image} from "@chakra-ui/react";
import {CartButton} from "../../Component";
import {GlobalStyle} from "../../GlobalStyles";

const ProductCard = (props) => {
    return (
        <>
            {Array.isArray(props?.FeaturedProduct) && props?.FeaturedProduct.map((product, index) => (
                <GlobalStyle.ProductCardContainerSmall key={index+(Math.random() + 1).toString(36).substring(7)}>
                    <GlobalStyle.ProductCardImageContainer>
                        <Image h={'100%'} w={'100%'} src={product?.original_featured_image} alt='Dan Abramov' />
                    </GlobalStyle.ProductCardImageContainer>
                    <GlobalStyle.ProductCardSmallText>{product?.category_title}</GlobalStyle.ProductCardSmallText>
                    <GlobalStyle.ProductCardNameText>{product?.product_oil_type}</GlobalStyle.ProductCardNameText>
                    <GlobalStyle.ProductCardSmallText>{product?.quantity} {product?.quantity_type}</GlobalStyle.ProductCardSmallText>
                    <GlobalStyle.ProductCardPriceText>BDT {product?.selling_price}</GlobalStyle.ProductCardPriceText>
                    <GlobalStyle.ProductCardCartButton><CartButton /></GlobalStyle.ProductCardCartButton>
                </GlobalStyle.ProductCardContainerSmall>
            ))}
        </>
    );
};

export default ProductCard;
