import React, {useEffect, useState} from 'react';
import {Flex} from "@chakra-ui/react";
import {getApiData} from "../../Helper/ApiHelper";
import {GlobalStyle} from "../../GlobalStyles";
import { HOME} from "../../URLs/Urls";
import {Header, ProductCard, ProductPromotionCard} from "../../Container";
import { ProductHeaderTitle} from "../../Component";

const Home = () => {

    const [dataLists, setDataLists] = useState([]);

    useEffect(() => {
        ResponseDataList();
    }, []);

    async function ResponseDataList() {
        const Data = await getApiData(HOME);
        if(Data?.success){
            setDataLists(Data?.response?.data?.data?.featured_product);
        }
    }

    return (
        <>
            <Header/>
            <GlobalStyle.PageContainer>
                <ProductHeaderTitle />
                <GlobalStyle.ProductCardContainer>
                    <ProductCard FeaturedProduct={dataLists}/>
                </GlobalStyle.ProductCardContainer>
                <Flex>
                    <ProductPromotionCard/>
                </Flex>
            </GlobalStyle.PageContainer>
        </>
    );
};

export default Home;
