import styled from "styled-components"

export const Active = styled.div `
    display: none;
    &.open {
        display: block;
    }
`
export const OverlayForm = styled.div`
    position: fixed;
    width: 40vw;
    height: 100vh;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    color: #fff;
    z-index: 4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    animation: show 0.9s ease 1 forwards;
    @keyframes show {
        0% {
            transform: translateX(100%);
        }
        100% {
            transform: translateX(0%);
        } 
    }
    .close-btn {
        position: absolute;
        top: 30px;
        right: 45px;
        background-color: #000;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
`

export const OverlayFormLoggin = styled.div`
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    .title-form {
        text-align: center;
        color: #000;
    }

    .title-form-h1 {
        font-size: 85px;
        font-weight: 500;
    }
    .title-form-p {
        margin-top: 10px;
    }
    //button google
    .button-loggin-google {
        width: 320px;
        height: 44px;
        background-color: white;
        border-radius: 9px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #ccc ; 
    }

    .a-loggin-google {
        text-decoration: none;
        color: #000;
        font-size: 14px;
        padding-left: 8px;
    }
    i {
        font-size: 19px;
    }
    /// or 
    .loggin-or {
        width: 200px;
        display: flex;
        align-items: center;
        color: #000;
    }

    b {
        background-color: currentColor;
    	display: block;
    	margin: 0 15px;
    	flex: 1;
    	height: 2px;
    	opacity: 0.1;
    }

    /// from loggin
    .from-loggin {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 140px;
    }

    .input-loggin {
        width: 320px;
        height: 44px;
        background-color: white;
        border: 1px solid #ccc;
        padding-left: 14px;
        border-radius: 9px;
    }

    //forgot password
    .forgot-password {
        width: 320px;
        display: flex;
        justify-content: flex-end;
        margin-top: 10px ;
    }
    .a-password {
        text-decoration: none;
        font-size: 13px;
        color: #47ddff;
        font-weight: 600;
    }

    //loggin-button
    .loggin-button {
        width: 320px;
        height: 44px;
        background-color: #000;
        border-radius: 20px;
    }

    .a-loggin-button {
        color: white;
        text-decoration: none;
    }
    
    //account form
    .account-form {
        color: #000;
        font-size: 14px;
        margin-top: 10px;
    }
    .a-account-form {
        color: #47ddff;
        text-decoration: none;
        margin-left: 5px;
    }
`