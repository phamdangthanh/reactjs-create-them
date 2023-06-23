import React from 'react';
import { IoMdClose } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import {OverlayForm, OverlayFormLoggin, Active} from './Loggin.Styles'
import { ThemeLoggin } from '../main/Provider';
import { useContext } from 'react';

const Loggin = () => {
    const value = useContext(ThemeLoggin)

    return (
        <Active className={value.open}>
        <OverlayForm>
                <div onClick={() => value.setOpen(null)} className='close-btn'>
                    <i className='i-close-login'><IoMdClose style={{
                        color: 'white',
                        fontSize: '19px'
                    }}></IoMdClose></i>
                </div>
                
                <OverlayFormLoggin>
                    <div className='title-form'>
                        <h1 className='title-form-h1'>Hi there!</h1>
                        <p className='title-form-p'>Welcome to Theme. Community Dashboard</p>
                    </div>
                    <button className='button-loggin-google'>
                        <i><FcGoogle></FcGoogle></i>
                        <a className='a-loggin-google' href="/">Log in with Google</a>
                    </button>
                    <div className='loggin-or'>
                        <b></b>
                            <span>or</span>
                        <b></b>
                    </div>
                    <div className='from-loggin'>
                    <input className='input-loggin' type="email" placeholder='Your email'/>
                    <input className='input-loggin' type="password" placeholder='Password'/>
                    <div className='forgot-password'>
                        <a className='a-password' href="/">Forgot password?</a>
                    </div>
                    </div>
                    <button className='loggin-button'>
                        <a className='a-loggin-button' href="">
                            <span>Loggin</span>
                        </a>
                    </button>
                    <div className="account-form">
                        Don't have account? 
                        <a className="a-account-form" href="/">Sign up</a>
                    </div>
                </OverlayFormLoggin>
        </OverlayForm>
        </Active>
    );
};

export default Loggin;