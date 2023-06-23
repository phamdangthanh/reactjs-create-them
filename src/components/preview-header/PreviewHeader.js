import React, { useState } from 'react';
import styled from "styled-components"
import { useContext } from 'react';
import { ThemeLoggin } from '../main/Provider';

const HeaderFixed = styled.div`
    position: relative;
    bottom: 54px;
`
const DivHeaderOrigin = styled.div`
    position: fixed;
    background-color: #262626;
    color: #545454;
    width: 100%;
    height: 54px;
    font-size: 12px;
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: center; 
    z-index: 3;
    
`

//Header Heaven Origin
const PreviewOrigin = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    left: 20px;
    .header-logo {
        width: 30px;
        height: 30px;
        margin-right: 8px;
        object-fit: cover;
        cursor: pointer;
        border-radius: 50%;
        border: 2px solid white;
    }
    .header-name_logo {
        text-decoration: none;
        font-size: 20px;
        font-family: Helvetica;
        position: relative;
        top: 1.5px;
        color: white;
        display: flex;
        
    }
    .origin-color {
        color: red;
        position: relative;
        top: 1.5px;
        left: 2px;
    }
`;


//Loggin
const ButtonLoggin = styled.div`
    margin-right: 20px;
    .button-header {
        display: inline-block;
        height: 30px;
        width: 80px;
        background-color: red;
        border-radius: 5px;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        cursor: pointer;
    }
    .btn-loggin {
        text-decoration: none;
        color: white;
        font-size: 14px;
    }

    .btn-loggin:hover {
        opacity: 1;
    }
    .button-header:hover {
        opacity: 0.8;
    }  
`;


const PreviewHeader = () => {
    const value = useContext(ThemeLoggin)

    return (
        <HeaderFixed>
        <DivHeaderOrigin>
            <PreviewOrigin>
                <img className= "header-logo" src="https://i.pinimg.com/236x/0e/70/36/0e70364a51522004186e0d1b54c35959.jpg" alt="" />
                <a className = "header-name_logo" href="/">Heaven <p className= 'origin-color'>Origin</p></a>
            </PreviewOrigin>
            <ButtonLoggin>
            <div className = "button-active">
                <button onClick={value.handleClick} className= "button-header">
                    <span className = "btn-loggin">Loggin</span>
                </button>
            </div>
            </ButtonLoggin>
        </DivHeaderOrigin>
        </HeaderFixed>
    );
};

export default PreviewHeader;