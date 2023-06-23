import React, { Children } from 'react';
import PreviewHeader from '../preview-header/PreviewHeader';
import HeaderMenu from '../header/HeaderMenu';
import HeaderContainer from '../header/HeaderContainer';
import SectionContent from '../section/SectionContent';
import SectionFlatsome from '../section/SectionFlatsome';
import SectionShopDemos from '../section/SectionShopDemos';
import SectionBusiness from '../section/SectionBusiness';
import SectionBgOverlay from '../section/SectionBgOverlay';
import SectionCustomer from '../section/SectionCustomer';
import SectionFeatures from '../section/SectionFeatures';
import SectionElements from '../section/SectionElements';
import FooterWrapper from '../footer/FooterWrapper';
import Loggin from '../preview-header/Loggin';

const Main = () => {
    return (
        <div className = "main">
            <Loggin></Loggin>   
            <PreviewHeader></PreviewHeader>
            <HeaderContainer></HeaderContainer>
            <HeaderMenu></HeaderMenu>
            <SectionContent></SectionContent>
            <SectionFlatsome></SectionFlatsome>
            <SectionShopDemos></SectionShopDemos>
            <SectionBusiness></SectionBusiness>
            <SectionBgOverlay></SectionBgOverlay>
            <SectionCustomer></SectionCustomer>
            <SectionFeatures></SectionFeatures>
            <SectionElements></SectionElements>
            <FooterWrapper></FooterWrapper>
            
        </div>
    );
};

export default Main;