import React from 'react';
import { DivSectionRelative, SectionHd, SectionFlatFather , ImgSecFlatsome, SectionFlex, SectionTitles , 
H3Flatsome, PFlatsome, AFlatsome, SpanFlatsome, SectionHdH3, SectionTitleB } from './Section.Styles'
import { ApiSectionFlatsome } from '../API/ApiSectionFlatsome';


const SectionFlatsome = () => {

    return (
        <SectionFlatFather>
            <SectionHd>
                <SectionTitleB></SectionTitleB>
                <SectionHdH3>Top reasons to love flatsome</SectionHdH3>
                <SectionTitleB></SectionTitleB>
            </SectionHd>
            <DivSectionRelative> {ApiSectionFlatsome.map((item, index) => (
            <SectionFlex key={item.id}> 
                <div>
                    <ImgSecFlatsome src={item.image} alt="" />
                </div>
                <SectionTitles>
                    <H3Flatsome>{item.title}</H3Flatsome>
                    <PFlatsome>{item.describe}</PFlatsome>
                    <AFlatsome href="/">
                        <SpanFlatsome>{item.button}</SpanFlatsome>
                    </AFlatsome>
                </SectionTitles>
            </SectionFlex>
            ))}
            </DivSectionRelative>
        </SectionFlatFather>
    );
};

export default SectionFlatsome;