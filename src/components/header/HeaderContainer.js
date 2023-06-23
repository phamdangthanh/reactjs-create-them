import React from 'react';
import styled from "styled-components"
import { ApiHeaderContainer } from '../API/ApiHeaderContainer';
import { TiMail, TiArrowSortedDown, TiHeartFullOutline, TiSocialFacebook, TiSocialInstagram, TiSocialTwitter } from "react-icons/ti";



const ContainerHeader = styled.div`
    background-color: #6ca6f1;
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 54px;
    top: -1px;
    
    .flex-container {
        width: 50px;
        padding: 0 50px;
    }
    
`
const ContainerText = styled.div`
    .li-uppercase {
        display: flex;
        align-items: center;
    }
    .uppercase {
        color: #fff;
        font-weight: 600;
        text-transform: uppercase;
        line-height: 1.2;
        width: 700px;
        text-align: end;
        font-size: 13px;
    }
    
`

const HeaderTable = styled.div`
    display: flex;
    align-items: center;
    .ul-container {
        display: flex;
        justify-content: space-evenly;
        width: 800px;
        align-items: center;
    }
    .header-container {
        border-right: 0.5px solid #dddada;
        
    }
    .a-container {

    }
    li {
        list-style: none;
    }
    a {
        position: relative ;
        bottom: 1.5px;
        text-decoration: none;
        font-size: 13.5px;
        color:#dddada ;
        padding-right: 15px;
    }

    .a-hover-white:hover {
        color: white;
        animation-name: hovereffect;
        animation-duration: 0.4s;
    }

    @keyframes hovereffect {
        0% {
            color: #dddada;
        }
        100% {
            color: white;
        }      
    }
    
    .a-hover-grey {
        color: white;
    }
    .a-hover-grey:hover {
        color: #dddada;
        animation-name: hovereffectgrey;
        animation-duration: 0.4s;

    }
    @keyframes hovereffectgrey {
        0% {
            color: white;
        }
        100% {
            color: #dddada;
        } 
    }

    .navigation {
        position: absolute;
        top: 30px;
        left: -16px;
        width: 300px;
        height: 150px;
        background-color: white;
        animation: hoveropacity  ease-in 0.25s;
        border: 0.5px solid #dddada;
        display: none;
        border-radius: 5px;
    }

    @keyframes hoveropacity {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    .navigation::before {
        content:"";
        color: white;
        border: 10px solid;
        position: absolute;
        border-color: transparent transparent white transparent;
        left: 40px;
        top: -18px;
    }

    .header-hover:hover .navigation {
        display: block;
        z-index: 1;
    }
    .header-navigation {
        display: flex;
        justify-content: center;
        text-align: center;
    }
`;



const HeaderContainer = () => {
    return (
        
        <ContainerHeader>
           <ContainerText>
            <ul>
                <li className = "li-uppercase">
                    <strong className = "uppercase">Which Anime Do You Like The Most?</strong>
                </li>
            </ul>
           </ContainerText>
            <div className= "flex-container"></div>
           <HeaderTable>
                <ul className = "ul-container">{ApiHeaderContainer.map((item, index) => (
                    <li key={item.id} className ="header-container">
                        <a className =  "a-hover-white a-container" href="/" >{item.folder}</a>
                    </li> 
                ))}
                <li style = {{
                    borderRight:'1px solid #dddada',
                    paddingRight:"15px",
                    paddingLeft:"px"
                }}>
                    <a className = "a-hover-white" style = {{    
                    }} href="/"> Newsletter
                        <TiMail style = {{
                            display:'inline-block',
                            position: 'absolute',
                            right: '-7px',
                            top: '0px',
                            width: '19px',
                            height: '19px',
                        }}></TiMail>
                    </a>
                </li> 
                <li className = "header-hover" style = {{
                    borderRight:'1px solid #dddada',
                    paddingRight:"15px",
                    position: 'relative',
                }}>
                    <a  className = "a-hover-grey" style = {{    
                    }} href="/"> Languages 
                        <TiArrowSortedDown style = {{
                            display:'inline-block',
                            position: 'absolute',
                            right: '-7px',
                            top: '1px',
                            width: '19px',
                            height: '19px',
                        }}></TiArrowSortedDown>
                    </a>
                    <ul className = "navigation">
                        <li className = "header-navigation">
                        <a  style = {{
                            position: "relative",
                            top: "68px",
                            left:'8px',
                            color:'black'
                        }} href="/">Everything....</a>
                        </li>
                    </ul>
                </li>
                
                <li style = {{
                    paddingRight:"15px"
                }}>
                    <a className = "a-hover-grey" style = {{    
                    }} href="/"> Wishlist 
                        <TiHeartFullOutline style = {{
                            display:'inline-block',
                            position: 'absolute',
                            right: '-7px',
                            top: '2px',
                            width: '19px',
                            height: '19px',
                        }}></TiHeartFullOutline>
                    </a>  
                </li> 

                {/* icons */}

                {/* facebook */}
                <li>
                    <a className = "a-hover-grey" style = {{ 
                    }} href="/"> 
                        <TiSocialFacebook style = {{
                            display:'inline-block',
                            position: 'absolute',
                            right: '12px',
                            top: '-7px',
                            width: '35px',
                            height: '35px',
                            maxWidth: "19px"
                        }}></TiSocialFacebook>
                    </a>  
                </li> 
                {/* instagram */}
                <li>
                    <a className = "a-hover-grey" style = {{ 
                    }} href="/"> 
                        <TiSocialInstagram style = {{
                            display:'inline-block',
                            position: 'absolute',
                            right: '20px',
                            top: '-7px',
                            width: '35px',
                            height: '35px',
                            maxWidth: "19px"
                        }}></TiSocialInstagram>
                    </a>  
                </li>
                   {/* twitter  */}
                   <li>
                    <a className = "a-hover-grey" style = {{ 
                        // color: 'white'
                    }} href="/"> 
                        <TiSocialTwitter style = {{
                            display:'inline-block',
                            position: 'absolute',
                            right: '25px',
                            top: '-7px',
                            width: '35px',
                            height: '35px',
                            maxWidth: "19px"
                        }}></TiSocialTwitter>
                    </a>  
                </li>
                        {/* Email */}
                <li>
                    <a className = "a-hover-grey" href="/" style = {{
                    }}> 
                        <TiMail  style = {{
                            display:'inline-block',
                            position: 'absolute',
                            right: '30px',
                            top: '-8px',
                            width: '35px',
                            height: '35px',
                            maxWidth: "19px"
                        }}></TiMail>
                    </a>  
                </li>
                </ul>
                
                
           </HeaderTable>
        </ContainerHeader>
    );
};

export default HeaderContainer;