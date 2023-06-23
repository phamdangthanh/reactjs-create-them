import styled from "styled-components"

/// Footer Wrapper
export const FooterHead = styled.div`
    width: 100%;
    height: 80px;
    background-color: #5b5b5b;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const MenuFooter = styled.div`
        width: 300px;
        height: 50px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
    .footer-body {
        width: 286px;
        height: 20px;
        padding-bottom: 24px;
        border-bottom: 1px solid #898989 ;
    }
    .ul-body {
        display: flex;
        justify-content: space-around;
        align-items: center;
        list-style: none;
    }
    a {
        text-decoration: none;
        font-size: 13px;
        font-weight: 600;
        color: #898989;
        text-transform: uppercase;
    }
    a:hover {
        color: white;
    }

    .copy-footer {
        text-decoration: none;
        font-size: 13px;
        color: #b1b1b1;
        position: relative;
        left: 4px;
    }

    strong {
        font-weight: bold;
        margin: 0 2px;
    }
`


export const SecondaryFooter = styled.div`
    width: 280px;
    height: 60px;
    display: grid;
    place-items: center;
    .payment-footer {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .button-icon {
        width: 50px;
        height: 30px;
        background-color: hsla(0,0%,100%,.1);
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 3px;
    }
    .icon-banking {
        font-size: 24px;
        color: #b1b1b1;
    }

    .icon-banking:hover{
        color: white;
    }
    
`