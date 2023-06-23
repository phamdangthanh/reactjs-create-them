import React from 'react';
import {AboutOverlay, ContainerOverlayAbout, AvatarImgAbout, AboutCompany,
    AboutH1, AboutH4, ButtonAboutA, ButtonAboutSpan } from './Section.Styles'
const SectionBgOverlay = () => {
    return (
        <AboutOverlay>
            <ContainerOverlayAbout>
                <AboutCompany>
                    <AvatarImgAbout src="https://imagedelivery.net/5ejkUOtsMH5sf63fw6q33Q/13882ea4-ea14-40fe-46dd-81c0f5cfb700/public" alt="" />
                    <AboutH1>Flatsome Studio</AboutH1>
                    <AboutH4>Large online library of pre-defined layouts and sections <br/> ready to be inserted into your Flatsome site</AboutH4>
                        <ButtonAboutA href="/">
                            <ButtonAboutSpan>Learn More</ButtonAboutSpan>
                        </ButtonAboutA>
                </AboutCompany>
            </ContainerOverlayAbout>
        </AboutOverlay>
    );
};

export default SectionBgOverlay;