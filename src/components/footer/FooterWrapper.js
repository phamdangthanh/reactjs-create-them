import React from 'react';
import { FaCcVisa } from "react-icons/fa";
import { FaCcPaypal, FaCcMastercard } from "react-icons/fa";
import { RiBankCardFill } from "react-icons/ri";
import { SiStarlingbank } from "react-icons/si";
import { ApiFooterWrapper } from '../API/ApiFooterWrapper';
import {FooterHead, MenuFooter, SecondaryFooter} from "./Footer.Styles"
const FooterWrapper = () => {
    return (
        <FooterHead>
            <MenuFooter>
            <div className='footer-body'>
                <ul className='ul-body'>{ApiFooterWrapper.map((item, index) => (
                    <li key={item.id}>
                        <a href="/">{item.folder}</a>
                    </li>
                ))}
                </ul>
            </div>
            <div className="copy-footer">
                Copyright 2023 ©   
                <strong>Flatsome Theme</strong>
            </div>
            </MenuFooter>

            <SecondaryFooter>
                <div className="payment-footer">
                    <a className='button-icon' href="https://www.visa.com.vn/">
                        <i className = "icon-banking"><FaCcVisa></FaCcVisa></i>
                    </a>
                    <a className='button-icon' href="https://www.paypal.com/vn">
                        <i className = "icon-banking"><FaCcPaypal></FaCcPaypal></i>
                    </a>
                    <a className='button-icon' href="/">
                        <i className = "icon-banking"><FaCcMastercard></FaCcMastercard></i>
                    </a>
                    <a className='button-icon' href="/">
                        <i className = "icon-banking"><RiBankCardFill></RiBankCardFill></i>
                    </a>
                    <a className='button-icon' href="/">
                        <i className = "icon-banking"><SiStarlingbank></SiStarlingbank></i>
                    </a>
                </div>
            </SecondaryFooter>
        </FooterHead>
    );
};

export default FooterWrapper;