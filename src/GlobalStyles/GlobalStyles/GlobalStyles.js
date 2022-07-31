import {chakra, Flex, Text} from '@chakra-ui/react'

const HeaderContainer = chakra(Flex, {
    baseStyle: {
        h: '10vh',
        bg: 'white',
        w: '100%',
        flexDirection: 'row',
        justifyContent:'space-between',
        boxShadow:'md',
    },
});


const PageContainer = chakra(Flex, {
    baseStyle: {
        ml: '10%',
        mr: '10%',
        flexDirection:'column',
    },
});

const ProductCardContainer = chakra(Flex, {
    baseStyle: {
        color: 'black',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        mt:'5vh',
    },
});


const LogoContainer = chakra(Flex, {
    baseStyle: {
        w: ['80%','70%','60%','50%','50%',],
        ml: '2rem',
        mr: '2rem',
    },
});

const LogoPosition = chakra(Flex, {
    baseStyle: {
        w:'40%',
        h:['4.5vh','5vh','5.5vh','6vh','7vh',],
        alignSelf:'center',
    },
});

const HeaderButtonContainer = chakra(Flex, {
    baseStyle: {
        justifyContent:'center',
        alignSelf:'center',
        mr:'2rem',
        display:['none','none','block','block','block',],
    },
});

const HeaderButton = chakra(Flex, {
    baseStyle: {
        bg:'red',
        color:'white',
        borderRadius:'full',
        padding:'0.5rem',
        flexDirection:'row',
        _hover:{cursor:'pointer'}
    },
});

const HeaderButtonIcon = chakra(Flex, {
    baseStyle: {
        ml:'0.2rem',
        mr:'0.2rem',
    },
});

const HeaderButtonText = chakra(Flex, {
    baseStyle: {
        fontSize:['0.4rem','0.5rem','0.6rem','0.7rem','0.8rem',],
        fontFamily:'poppins',
    },
});

const ProductHeaderTitleContainer = chakra(Flex, {
    baseStyle: {
        color:'black',
        w:'100%',
        flexDirection:'column',
        mt:'5vh',
    },
});

const ProductHeaderTitleText = chakra(Text, {
    baseStyle: {
        fontSize:['0.8rem','0.9rem','0.9rem','01rem','1rem',],
        fontFamily:'poppins',
    },
});

const ProductCardContainerSmall = chakra(Flex, {
    baseStyle: {
        flexDirection:'column',
        w:['40%','40%','23%','23%','23%',],
        mb:'2rem',
        h:'48vh',
        borderWidth:'0.5px',
        borderColor:'gray',
        alignItems:'center',
        overflow:'hidden',
    },
});

const ProductCardImageContainer = chakra(Flex, {
    baseStyle: {
        justifyContent:'center',
        h:'25vh',
        p:'1rem',
    },
});

const ProductCardSmallText = chakra(Text, {
    baseStyle: {
        h:'1rem',
        fontSize:['0.4rem','0.4rem','0.4rem','0.5rem','0.5rem',],
        color:'gray',
        fontFamily:'poppins',
    },
});

const ProductCardNameText = chakra(Text, {
    baseStyle: {
        h:'3rem',
        alignItems:'center',
        justifyContent:'center',
        fontSize:['0.8rem','0.9rem','1rem','1.2rem','1.2rem',],
        color:'black',
        fontWeight:'bold',
        fontFamily:'poppins',
    },
});


const ProductCardPriceText = chakra(Text, {
    baseStyle: {
        fontSize:['0.8rem','0.9rem','1rem','1.2rem','1.2rem',],
        color:'lightblue',
        fontWeight:'bold',
        fontFamily:'poppins',
    },
});

const ProductCardCartButton = chakra(Flex, {
    baseStyle: {
        justifyContent:'center',
        alignItems:'center',
        _hover:{cursor:'pointer'},
        ml:'20%',
        mr:'20%',
    },
});

const ProductPromotionCardContainer = chakra(Flex, {
    baseStyle: {
        flexDirection:['column','column','column','row','row',],
        mt:'2vh',
        mb:'10vh',
        alignItems:'center',
    },
});

const ProductPromotionCardImageContainer = chakra(Flex, {
    baseStyle: {
        w:'35%',
        mb:['1rem','1rem','1rem','0rem','0rem',],
    },
});

const ProductPromotionCardTextContainer = chakra(Flex, {
    baseStyle: {
        w:'70%',
        flexDirection:['column','column','column','row','row',],
        alignItems:'flex-start',
    },
});

const ProductPromotionCardContainerTextPosition = chakra(Flex, {
    baseStyle: {
        flexDirection:'column',
        ml:'2rem',
        alignItems:['center','center','center','flex-start','flex-start',],
        justifyContent:'flex-start',
    },
});

const ProductPromotionCardHeadingText = chakra(Flex, {
    baseStyle: {
        fontSize:['1rem','1rem','1.3rem','1.6rem','2rem',],
        fontFamily:'poppins'
    },
});

const ProductPromotionCardDetailTextContainer = chakra(Flex, {
    baseStyle: {
        textAlign:'justify',
        mr:['0rem','0rem','0rem','2rem','2rem',],
        fontFamily:'poppins',
    },
});

const ProductPromotionCardDetailText = chakra(Flex, {
    baseStyle: {
        fontSize:['0.5rem','0.6rem','0.7rem','0.8rem','0.8rem',],
        fontFamily:'poppins',
    },
});

const ProductPromotionCardButton = chakra(Flex, {
    baseStyle: {
        bg:'black',
        p:'0.6rem',
        borderRadius:'full',
        color:'white',
        mt:'1rem',
        _hover:{cursor:'pointer'},
        fontFamily:'poppins',
    },
});


const ProductPromotionCardButtonText = chakra(Text, {
    baseStyle: {
        fontSize:['0.5rem','0.6rem','0.7rem','0.8rem','0.8rem',],
        fontFamily:'poppins',
    },
});



const TextA = chakra(Text, {
    baseStyle: {
        color:'red',
        fontSize:'4rem',
        fontFamily:'poppins'
    },
});

export default {HeaderContainer, PageContainer, ProductCardContainer, LogoContainer, LogoPosition, HeaderButtonContainer,
    HeaderButton, HeaderButtonIcon, HeaderButtonText, ProductHeaderTitleContainer, ProductCardImageContainer, ProductHeaderTitleText,
    ProductCardContainerSmall, ProductCardSmallText, ProductCardNameText, ProductCardPriceText, ProductCardCartButton, ProductPromotionCardContainer,
    ProductPromotionCardImageContainer, ProductPromotionCardTextContainer,ProductPromotionCardContainerTextPosition,
    ProductPromotionCardHeadingText, ProductPromotionCardDetailTextContainer, ProductPromotionCardDetailText, ProductPromotionCardButton,
    ProductPromotionCardButtonText, } ;
