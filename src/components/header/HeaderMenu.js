import React from 'react';
import styled from "styled-components"
import { AiOutlineSearch } from "react-icons/ai";
import { RiArrowDownSLine } from "react-icons/ri";
import { ShopDemos, MoreShopDemos, BusinessDemos, Features, More, CategoryPage, ProductPages, Mores, Pages } from '../API/ApiHeaderMenu';
import { FaShoppingCart } from "react-icons/fa";
import { ImgWrapper, H1Wrapper, WrapperHeader, HeaderImg, DivWrapper, HeaderH1, HeaderH6, TextH6, HeaderP, TextP, StrongText } from './HeaderWrapper.styles'





const DivMenu = styled.div`
    width: 100%;
    height: 870px;
    background-image: url(https://w.wallhaven.cc/full/9m/wallhaven-9mjoy1.png);
    background-size: 100% auto;
    position: relative;
    top: -1px;
    background-repeat: no-repeat;
    
`;

const DivAvatarTheme = styled.div`
    position: relative;
    top: -3px;
    left: 33px;
    .avatar-theme {
        width: 35px;
        height: 35px;
        object-fit: cover;
        display: inline-block;
        margin: 0 10px;
        position: relative;
        top: 8px;
        border-radius: 50%;
        border: 2px solid white;
    }
`

const BackgroundHeader = styled.div`
   position: absolute;
   background-color: rgba(0,0,0,.66);
   width: 100%;
   height: 100%;
   
    .background-black {
        
       
    }
`;

const UlHoverMenu = styled.ul`
    .demos-hover {
        display: flex;
        justify-content: space-around;
        align-items: center;
        position: absolute;
        width: 550px;
        height: 430px;
        background-color: white;
        top: 57px;
        animation: hoverheader1  ease-in 0.25s;
        border-radius: 5px;
        z-index: 1;
    }
    .hover-dm {
        display: none;
    }
    .li-hover1:hover .hover-dm {
        display: block;
    }

    @keyframes hoverheader1 {
        from{
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    
    .features-hover {
        display: flex;
        justify-content: space-around;
        align-items: center;
        position: absolute;
        width: 550px;
        height: 530px;
        background-color: white;
        top: 57px;
        left: 312px;
        animation: hoverheader2  ease-in 0.25s;
        border-radius: 5px;
        z-index: 1;
    }
    .hover-ft {
        display: none;
    }
    .li-hover2:hover .hover-ft {
        display: block;
    }
    @keyframes hoverheader2 {
        from{
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    .features-hover::before {
        content: "";
        color: white;
        border: 10px solid;
        position: absolute;
        border-color: transparent transparent white transparent;
        left: 220px;
        top: -19px;
    }



    .shop-hover {
        display: flex;
        justify-content: space-around;
        align-items: center;
        position: absolute;
        width: 550px;
        height: 430px;
        background-color: white;
        top: 57px;
        right: 280px;
        animation: hoverheader3  ease-in 0.25s;
        border-radius: 5px;
        z-index: 1;
    }
    .hover-sp {
        display: none;
    }
    .li-hover3:hover .hover-sp {
        display: block;
    }

    @keyframes hoverheader3 {
        from{
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    .shop-hover::before {
        content: "";
        color: white;
        border: 10px solid;
        position: absolute;
        border-color: transparent transparent white transparent;
        left: 218px;
        top: -18px;
    }



    img {
        width: 200px;
        object-fit: cover;
        height: 525px;
        position: relative;
        left: 11px;
    }

    .pages-hover {
        display: flex;
        justify-content: start;
        align-items: center;
        position: absolute;
        width: 270px;
        height: 310px;
        background-color: white;
        top: 57px;
        animation: hoverheader4  ease-in 0.25s;
        border-radius: 5px;
        z-index: 1;
    }
    .hover-pg {
        display: none;
    }

    .li-hover4:hover .hover-pg {
        display: block;
    }

    @keyframes hoverheader4 {
        from{
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    .pages-hover::before {
        content: "";
        color: white;
        border: 10px solid;
        position: absolute;
        border-color: transparent transparent white transparent;
        left: 13px;
        top: -19px;
    }

    .name-grey {
        color: #b9b3b3;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: 600;
    }

    .name-grey:hover {
        color: #fff;
        transition-duration: 0.4s;
    }

    @keyframes namegreyhover {
        0% {
            color: #b9b3b3;
        }
        100% {
            color: #fff;
        }
    }


    .ul-display {
        display: grid;
        gap: 12px;
    }

    .features-display {
        display: grid;
        gap: 20px;
    }

    .features-display2 {
        display: grid;
        gap: 20px;
        position: relative;
        bottom: 21px;
    }

    .shop-display {
        display: grid;
        gap: 14px;
    }

    .ul-more-shop {
        display: grid;
        gap: 12px;
        position: relative;
        bottom: 22px;
    }
    .ul-business {
        display: grid;
        gap: 12px;
        position: relative;
        bottom: 66px;
    }
    
    .demos-hover::before {
        content: "";
        color: white;
        border: 10px solid;
        position: absolute;
        border-color: transparent transparent white transparent;
        left: 19px;
        top: -19px;
    }
    
    .text-none {
        text-decoration: none;
        font-size: 15px;
        color: #b9b3b3;

    }
    .text-none:hover {
        color: black;
        animation-name: textnonehover;
        animation-duration: 0.4s;
    }
    
    @keyframes textnonehover {
        0% {
           color: #b9b3b3;
        } 
        100% {
            color: black;
        }
    }

    .hover-sch1 {
        color: #b9b3b3;
    }

    .hover-sch1:hover {
        color: white;
    }

    .hover-outline {
        display: none;
        animation: hoversearch  ease-in 0.25s;
    }

    :hover .hover-outline {
        display: block;
    } 

    @keyframes hoversearch {
        from{
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

`

const DivFatherCard = styled.div` 
    width: 78rem;
    height: 70px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: absolute;
    left: 19%;
    .ul-flex {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 50%;
    }
    li {
        list-style: none;
        text-decoration: none;
    }
    .li-rim {
        border-bottom: 1px solid #b9b3b3;
        padding-bottom: 13px;
    }
    .li-features {
        border-bottom: 1px solid #b9b3b3;
        padding-bottom: 5px;
    }

    .li-shop {
        border-bottom: 1px solid #b9b3b3;
        padding-bottom: 15px;
    }

    .li-pg {
        border-bottom: 1px solid #b9b3b3;
        padding-bottom: 15px;
        width: 210px;
    }
    .pg-ul {
        padding: 10px 30px;
        display: grid;
        gap: 16px;
    }
`;


const LogginCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    .loggin-card {
        color: #b9b3b3;
        transition-duration: 0.4s;

    }

    .loggin-card:hover {
        color: white;
    } 

    @keyframes hoversearch {
        from{
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    .li-card-hover:hover .hover-list-card {
        display: block;
    }

    .hover-list-card {
        position: absolute;
        width: 300px;
        height: 70px;
        background-color: white;
        right: 40px;
        top: 58px;
        border-radius: 5px;
        display: none;
        animation: hovercardlist  ease-in 0.25s;
    }
    @keyframes hovercardlist {
        from{
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    .list-card {
        height: 100%;
        border: 1px solid  979393;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .hover-list-card::before {
        content: "";
        color: white;
        border: 10px solid;
        position: absolute;
        border-color: transparent transparent white transparent;
        right: 39px;
        top: -19px;
        display: inline;
    }
`

const HoverSearch = styled.div`
    position: absolute;
    left: 350px;
    top: 55px;



    .hover-outline {
        display: none;

    }

    :hover .hover-outline {
        display: block;
    }
    
    

    .search-outline {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        width: 300px;
        height: 70px;
        border-radius: 5px;
    }

    .search-outline::before {
        content: "";
        color: white;
        border: 10px solid;
        position: absolute;
        border-color: transparent transparent white transparent;
        left: 9px;
        top: -19px;
    }

    .input-pw {
        border: none;
        border: 1px solid #b9b3b3;
        height: 35px;
        width: 220px;
        color: black;
        padding-left: 9px;
    }

    .background-search {
        width: 35px;
        height: 35px;
        background-color: #D26E4B;
    }
`

const HeaderMenu = () => {
    return (
        
        <DivMenu>
        
            <BackgroundHeader>
                <div className='background-header'></div>
            </BackgroundHeader>
            {/* <HeaderMenuContainer> */}
                <DivFatherCard>
                <DivAvatarTheme>
                    <img className='avatar-theme' src="https://imagedelivery.net/5ejkUOtsMH5sf63fw6q33Q/e99ff3d0-3770-4a2b-518c-c589f1809000/public" alt="" />
                    <a style={{
                        color:'white',
                        textDecoration: 'none',
                        textTransform: 'uppercase',
                        fontSize: '28px',
                        fontWeight:'650',
                    }} href="/">Everything</a>
                </DivAvatarTheme>
                    <UlHoverMenu className='ul-flex'>
                      <li className='hover-sch1'><AiOutlineSearch style={{
                        fontSize: '23px',
                        fontWeight:'800'
                      }}/>
                      <HoverSearch>
                      <div className='hover-outline'>
                        <div className="search-outline">
                            <input className='input-pw' type="search" name="" placeholder='Search...'/>
                            <div className='background-search'>
                                <a href="/"> <AiOutlineSearch style={{
                                    color: 'white',
                                    fontSize: '21',
                                    margin: 'auto',
                                    marginTop: '8px'
                                }}></AiOutlineSearch></a>
                            </div>
                        </div>
                      </div>
                      </HoverSearch>
                      </li>


                      <li className='li-hover1'>
                      <a className="name-grey" href="/">Demos <RiArrowDownSLine style={{
                        display: "inline-block",
                        position:'relative',
                        top: '3px',
                        left: '-3px',
                        color: '#dddada',
                      }} /> </a>
                      <div className='hover-dm'>
                        <div className='demos-hover'>
                            <ul className='ul-display' > {ShopDemos.map((item, index) => (
                                <li className='li-rim' key={item.id}><a className = "text-none" href="/">{item.menu}</a></li>
                            ))}
                            </ul>
                            <ul className='ul-more-shop' >  {MoreShopDemos.map((item, index) => (
                                <li className='li-rim' key={item.id}><a className = "text-none" href="/">{item.menu}</a></li>
                            ))}
                            </ul>
                            <ul className='ul-business' > {BusinessDemos.map((item, index) => (
                                <li className='li-rim' key={item.id}><a className = "text-none" href="/">{item.menu}</a></li>
                            ))}
                            </ul>
                        </div>
                        </div>
                      </li>

                      <li className='li-hover2'>
                      <a className="name-grey" href="/">Features <RiArrowDownSLine style={{
                        display: "inline-block",
                        position:'relative',
                        top: '3px',
                        left: '-3px',
                        color: '#dddada',
                      }} /></a>
                      <div className="hover-ft">
                        <div className='features-hover'>
                            <ul className='features-display' > {Features.map((item, index) => (
                                <li className='li-features' key={item.id}><a className = "text-none" href="/">{item.menu}</a></li>
                            ))}
                            </ul>
                            <ul className='features-display2' > {More.map((item, index) => (
                                <li className='li-features' key={item.id}><a className = "text-none" href="/">{item.menu}</a></li>
                            ))}
                            </ul>
                            <ul>
                                <li><img src="https://imagedelivery.net/5ejkUOtsMH5sf63fw6q33Q/30f4fee4-ec16-4528-abaf-251888d24f00/public" alt="" /></li>
                            </ul>
                        </div>
                        </div>
                      </li>

                      <li className='li-hover3' ><a className="name-grey" href="/">Shop <RiArrowDownSLine style={{
                        display: "inline-block",
                        position:'relative',
                        top: '3px',
                        left: '-3px',
                        color: '#dddada',
                      }} /></a>
                      <div className='hover-sp'>
                      <div className='shop-hover'>
                            <ul className='shop-display'> {CategoryPage.map((item, index) => (
                                <li className='li-shop' key={item.id}><a className = "text-none" href="/">{item.menu}</a></li>
                            ))}
                            </ul>
                            <ul className='shop-display'> {ProductPages.map((item, index) => (
                                <li className='li-shop' key={item.id}><a className = "text-none" href="/">{item.menu}</a></li>
                            ))}
                            </ul>
                            <ul className='shop-display'> {Mores.map((item, index) => (
                                <li className='li-shop' key={item.id}><a className = "text-none" href="/">{item.menu}</a></li>
                            ))}
                            </ul>
                      </div>
                      </div>
                      </li>

                      <li className='li-hover4'><a className="name-grey" href="/">Pages <RiArrowDownSLine style={{
                        display: "inline-block",
                        position:'relative',
                        top: '3px',
                        left: '-3px',
                        color: '#dddada',
                      }} /></a>
                      <div className='hover-pg'>
                      <div className='pages-hover'>
                            <ul className='pg-ul'> {Pages.map((item, index) => (
                                <li className='li-pg' key={item.id}><a className = "text-none" href="/">{item.menu}</a></li>
                            ))}
                            </ul>
                      </div>
                      </div>
                      </li>

                      <li><a className='name-grey' style={{
                        textDecoration: 'none',
                        textTransform: 'uppercase',
                        
                      }} href="/">Blog </a></li>

                      <li><a className='name-grey' style={{
                        textDecoration: 'none',
                        textTransform: 'uppercase',
                        
                      }} href="/">Element</a></li>

                    </UlHoverMenu>

                <LogginCard>
                    <ul className='ul-card-hover' style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-around', 
                        width: '192px'             
                    }}>
                        <li><a className='loggin-card' style={{
                            textDecoration:'none',
                            textTransform: 'uppercase',
                            fontWeight: '600'
                        }} href="/">Loggin</a></li>
                        <li className='header-divider'><a className='loggin-card' style={{
                            color: '#dddada',
                        }} href="/"> | </a></li>



                        <div className='hv-login-card'>
                        <li className='li-card-hover'>
                        <a className='loggin-card' style={{
                            textDecoration:'none',
                            textTransform: 'uppercase',
                            position:'relative',
                            fontWeight: '600',
                            top:'-1px'
                        }} href="/">Cart / $1,00 <FaShoppingCart style={{
                            display:'inline-block',
                            position: 'relative',
                            top: '1px',
                            left: '4px',
                        }}/></a>
                        <div className='hover-list-card'>
                            <div className='list-card'>
                                <p>No product in the card.</p>
                                <a href="/"> </a>
                                <a href="/"> </a>
                                <a href="/"> </a>
                            </div>
                        </div>
                        </li>
                        </div>
                    </ul>
                </LogginCard>
                </DivFatherCard>



                <WrapperHeader>
        <DivWrapper>
            <HeaderImg>
                <ImgWrapper src="https://imagedelivery.net/5ejkUOtsMH5sf63fw6q33Q/e99ff3d0-3770-4a2b-518c-c589f1809000/public" alt="" />
            </HeaderImg>
            <HeaderH1>
                <H1Wrapper> FLATSOME THEME FOR WORDPRESS</H1Wrapper>
            </HeaderH1>
            <HeaderH6>
                <TextH6>#1 Best Selling <StrongText>Manga / Manhwa</StrongText><br/> & Anime theme</TextH6>
            </HeaderH6>
            <HeaderP>
                <TextP>A <StrongText>Manga / Manhwa</StrongText> Theme A lot of people are interested in the world</TextP>
            </HeaderP>
        </DivWrapper>
        <RiArrowDownSLine style={{
            color: 'white',
            position: 'relative',
            top: '390px',
            fontSize: "53px",
            color: '#ccc',
            left: '27px'
        }}></RiArrowDownSLine>
        </WrapperHeader>
        </DivMenu>
    );
};

export default HeaderMenu;