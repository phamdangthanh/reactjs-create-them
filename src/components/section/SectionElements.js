import React from 'react';
import {ElementHead, TitleElement, CardElement, ButtonElement} from './Section.Styles'
import { ApiSectionElements } from '../API/ApiSectionElements';
import { BsFillCartFill } from "react-icons/bs";

const SectionElements = () => {
    return (
        <ElementHead>
            <TitleElement>
                <b></b>
                <h2 className='h2-element'>FLATSOME ELEMENTS</h2>
                <b></b>
            </TitleElement>
            <CardElement className="card-element">
            {ApiSectionElements.map((item, index) => (
                <div key={item.id} className='card-item'>
                <a href="">
                    <img className='img-card' src={item.image} alt="" />
                    <p className='p-card'>{item.title}</p>
                </a>
                </div>
            ))}
            </CardElement>
            <ButtonElement>
            <a href="/">
                <h3 className='h3-button'>Buy Flatsome Now</h3>
                <i className='i-icon'><BsFillCartFill></BsFillCartFill></i>
            </a>
            </ButtonElement>
        </ElementHead>
    );
};

export default SectionElements;