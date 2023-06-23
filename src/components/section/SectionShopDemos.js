import React from 'react';
import { SectionHdShops ,ShopContainerImg, ContainerImgFlex ,ShopImgItem, 
    ImgShopDemos, ShopDivItem, ShopAItem, DivTitleShop, TitleShopDemos,
    TitleShopDemosH1, TitleShopDemosH3, TitleShopLinesH2, SectionShopB, SecTitleShop } from './Section.Styles'
import { ApiSectionShops } from '../API/ApiSectionShop';
const SectionShopDemos = () => {
    return (
        <SectionHdShops>
            <TitleShopDemos>
                <TitleShopDemosH1>Anime Shop Theme Demos</TitleShopDemosH1>
                <TitleShopDemosH3>Flatsome includes many pre-made homepages and settings you can add <br/> with a single click. These are just examples. You can mix and match headers, <br/> pages, colors and fonts using the Theme Option Panel.</TitleShopDemosH3>
            </TitleShopDemos>
            <SecTitleShop>
                    <SectionShopB></SectionShopB>
                <TitleShopLinesH2>Anime Shop DEMOS</TitleShopLinesH2>
                    <SectionShopB></SectionShopB> 
            </SecTitleShop>
            <ContainerImgFlex>
                <ShopContainerImg>{ApiSectionShops.map((item, index) => (
                    <ShopDivItem key={item.id}>
                        <ShopAItem href="/">
                            <ShopImgItem>
                                <ImgShopDemos src={item.image} alt="" />
                            </ShopImgItem>
                            <DivTitleShop>
                                <p>{item.title}</p>
                            </DivTitleShop>
                        </ShopAItem>
                    </ShopDivItem>
                ))}
                </ShopContainerImg>
            </ContainerImgFlex>
        </SectionHdShops>
    );
};

export default SectionShopDemos;