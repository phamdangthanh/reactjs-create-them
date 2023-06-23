import React from 'react';
import { DivSectionBg, ImgSectionContent, ImgBgSection, TitleSection, H2SectionCt, H4SectionCt  } from './Section.Styles'
const SectionContent = () => {
    return (
        <DivSectionBg>
            <TitleSection>
                <H2SectionCt>Amazing Theme with perfect User Experience</H2SectionCt>
                <H4SectionCt>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur maiores dicta repudiandae natus repellendus quaerat dolor illo <br/> voluptatum inventore! Laborum, sequi! Ullam ipsa beatae ex sapiente cumque animi voluptatibus. Maiores! Lorem ipsum, dolor <br/> sit amet consectetur adipisicing elit. Voluptate, minima quae expedita earum amet rem dolor voluptates optio ipsa quia vero, veritatis <br/> nulla at dolores magnam exercitationem enim fugit. Perspiciatis! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis assumenda <br/>doloribus id, alias laboriosam, ipsa non culpa, et nam rerum nostrum tempore officiis. Maxime explicabo, commodi fugit corrupti accusantium quibusdam?</H4SectionCt>
            </TitleSection>
            <ImgBgSection>
                <ImgSectionContent src="https://images-ng.pixai.art/images/orig/cc537d04-c309-473d-acf0-91bd4f3900b9" alt="" />
            </ImgBgSection>
        </DivSectionBg>
    );
};

export default SectionContent;