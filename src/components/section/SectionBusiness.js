import React from 'react';
import { SectionBusinessDiv, ImgBusiness, DivImgBusiness, ABusinessDemos,
    FatherDivBusiness, ContaiBusinessDiv, WrapBusinessItem, ContainerH1Business,
    H1Business, CoverBusinessP, BLineBusiness } from "./Section.Styles";
import { ApiSectionBusiness } from '../API/ApiSectionBusiness';


const SectionBusiness = () => {
    return (
        <SectionBusinessDiv>
            <ContainerH1Business>
                    <BLineBusiness></BLineBusiness>
                <H1Business>Business Demos</H1Business>
                    <BLineBusiness></BLineBusiness>
            </ContainerH1Business>
            <WrapBusinessItem>
                <FatherDivBusiness>{ApiSectionBusiness.map((item, index) => (
                    <ContaiBusinessDiv key={item.id}>
                        <ABusinessDemos href="/">
                            <DivImgBusiness>
                                <ImgBusiness src={item.image} alt="" />
                            </DivImgBusiness>
                            <CoverBusinessP>
                                <p>{item.title}</p>
                            </CoverBusinessP>
                        </ABusinessDemos>
                    </ContaiBusinessDiv>
                ))}
                </FatherDivBusiness>
            </WrapBusinessItem>
        </SectionBusinessDiv>
    );
};

export default SectionBusiness;