import React from 'react';
import { useState } from 'react';
import { ApiSectionFeatures } from '../API/ApiSectionFeatures';
import {SectionFeaturesHeads, TitleFeatures, ImgFeaturesCard} from "./Section.Styles"


const SectionFeatures = () => {
    
    return (
    <SectionFeaturesHeads>
        <div className='features-body'>
            <TitleFeatures>
                <b></b>
                <h1>FLATSOME MAIN FEATURES</h1>
                <b></b>
            </TitleFeatures>
            <ImgFeaturesCard>{ApiSectionFeatures.map((item, index) =>  (
                <div className='features-card' key={index}>
                    <div className='zoom-image'>
                        <a href="">
                        <img src={item.image} alt="" />
                        <h1>{item.title}</h1>
                        <p>{item.note}</p>
                        </a>
                    </div>
                </div>
            ))}
            </ImgFeaturesCard>
        </div>
    </SectionFeaturesHeads>
    );
};

export default SectionFeatures;