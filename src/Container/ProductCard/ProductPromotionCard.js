import React from 'react';
import { Image} from "@chakra-ui/react";
import {TestImg} from "../../Asset";
import {GlobalStyle} from "../../GlobalStyles";

const ProductPromotionCard = () => {
    return (
        <>
            <GlobalStyle.ProductPromotionCardContainer>
                <GlobalStyle.ProductPromotionCardImageContainer>
                    <Image h={'100%'} w={'100%'} src={TestImg} alt='Dan Abramov' />
                </GlobalStyle.ProductPromotionCardImageContainer>
                <GlobalStyle.ProductPromotionCardTextContainer>
                    <GlobalStyle.ProductPromotionCardContainerTextPosition>
                        <GlobalStyle.ProductPromotionCardHeadingText>Reap that value of our</GlobalStyle.ProductPromotionCardHeadingText>
                        <GlobalStyle.ProductPromotionCardHeadingText fontWeight={'bold'}>Security Seal</GlobalStyle.ProductPromotionCardHeadingText>
                        <GlobalStyle.ProductPromotionCardDetailTextContainer>
                            <GlobalStyle.ProductPromotionCardDetailText>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </GlobalStyle.ProductPromotionCardDetailText>
                        </GlobalStyle.ProductPromotionCardDetailTextContainer>
                        <GlobalStyle.ProductPromotionCardButton >
                            <GlobalStyle.ProductPromotionCardButtonText>Learn More</GlobalStyle.ProductPromotionCardButtonText>
                        </GlobalStyle.ProductPromotionCardButton>
                    </GlobalStyle.ProductPromotionCardContainerTextPosition>
                </GlobalStyle.ProductPromotionCardTextContainer>

            </GlobalStyle.ProductPromotionCardContainer>
        </>
    );
};

export default ProductPromotionCard;
