import React, { useRef, useState } from 'react'; 
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css"; 
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIosNew } from "react-icons/md"; 
import { ApiSectionCustomer } from '../API/ApiSectionCustomer'; 
import {AppCustomer, SliderImg, MainSlider,CustomerCard,  CardCustomer,  
    CustomerTitle, CustomerH1, CustomerH6, CustomerA, CustomerSpan, Buttons,  
    CardItemSlider, CoverSliderImg, OverlayImageCustom, ItemImgOverlay, ModalImg, 
    ModalOverlay, ModalItems, ButtonsModal } from './Section.Styles' 
import './Section.module.css' 
 
const SectionCustomer = () => { 
 
    const [currentIndex, setCurrentIndex] = useState(0) 
     
    const [on, setOn] = useState(null) 
 
    const [clickedImage, setClickedImage] = useState(null); 
 
 
    const handleClick = () => { 
      setOn('open') 
    } 
 
    const handleAfterChange = (currentSlide) => { 
        setCurrentIndex(currentSlide); 
    } 
 
     
 
    const settings = { 
        dots: true, 
        infinite: true, 
        speed: 500, 
        slidesToShow: 3, 
        slidesToScroll: 3, 
        arrows: false, 
        appendDots: dots => ( 
            <div 
          style={{ 
            display:'none' 
          }} 
        > 
        </div> 
        ), 
        initialSlide: 0, 
        responsive: [ 
          { 
            breakpoint: 1024, 
            settings: { 
              slidesToShow: 3, 
              slidesToScroll: 3, 
              infinite: true, 
              dots: true 
            } 
          }, 
          { 
            breakpoint: 600, 
            settings: { 
              slidesToShow: 2, 
              slidesToScroll: 2, 
              initialSlide: 2 
            } 
          }, 
          { 
            breakpoint: 480, 
            settings: { 
              slidesToShow: 1, 
              slidesToScroll: 1 
            } 
          } 
        ] 
      }; 
 
      const settingsOverlay = { 
        dots: true, 
        fade: true, 
        infinite: true, 
        speed: 100, 
        slidesToShow: 1, 
        slidesToScroll: 1, 
        arrows: false, 
        appendDots: dots => ( 
            <div 
          style={{ 
            display:'none' 
          }} 
        > 
        </div> 
        ), 
      }; 
 
      const arrowRef = useRef(null) 
      const ModalarrowRef = useRef(null) 
    return ( 
        <AppCustomer> 
            <CustomerCard> 
                <CustomerTitle> 
                    <CustomerH1>Customer Showcase</CustomerH1> 
                    <CustomerH6>Our Customers creates any kind of WordPress sites with Flatsome with amazing and beautiful results. <br/>   Take a look at what some of our customers have made with Flatsome.</CustomerH6> 
                    <CustomerA> 
                        <CustomerSpan>Open ShowCase</CustomerSpan> 
                    </CustomerA> 
                </CustomerTitle>  
                <MainSlider> 
                        <Slider ref={arrowRef} {...settings}> 
                    {ApiSectionCustomer.map((item) => ( 
                        <CardCustomer> 
                            <CardItemSlider> 
                                    <CoverSliderImg onClick={() => setClickedImage(item.image)}> 
                                        <SliderImg onClick={() => handleClick()} src={item.image} alt="" /> 
                                    </CoverSliderImg> 
                            </CardItemSlider> 
                        </CardCustomer> 
                    ))} 
                        </Slider> 
                        <Buttons> 
                        <div className='hover-button'> 
                            <button 
                            onClick={() => arrowRef.current.slickPrev()} 
                             className='back'><MdOutlineArrowBackIosNew/></button> 
                            <button  
                            onClick={() => arrowRef.current.slickNext()} 
                            className='next'><MdOutlineArrowForwardIos/></button> 
                        </div> 
                        </Buttons> 
                </MainSlider> 
            </CustomerCard> 
            <OverlayImageCustom className={on}> 
            <ModalOverlay onClick={() => setOn(null)}> 
            <ModalItems> 
            <Slider ref={ModalarrowRef} {...settingsOverlay} 
             afterChange={handleAfterChange} 
              
             > 
            {ApiSectionCustomer.map((item, index) => ( 
                     
                <ModalImg onClick={(e) => { 
                      e.stopPropagation() 
                    }}> 
                    <ItemImgOverlay onClick={() => ModalarrowRef.current.slickNext()} src={item.image}  alt= {clickedImage} /> 
                    <p style={{ 
                        display: 'flex', 
                        justifyContent: 'flex-end', 
                        color: 'white', 
                        fontSize: '12px', 
                        paddingTop: '5px' 
                    }}>{currentIndex} of 14</p> 
                </ModalImg> 
 
            ))} 
            </Slider> 
                <ButtonsModal> 
                        <div onClick={(e) => { 
                              e.stopPropagation() 
                    }}  className='hover-button-modal'> 
                            <button 
                            onClick={() => ModalarrowRef.current.slickPrev()} 
                             className='back-modal'><MdOutlineArrowBackIosNew/></button> 
                            <button  
                            onClick={() => ModalarrowRef.current.slickNext()} 
                            className='next-modal'><MdOutlineArrowForwardIos/></button> 
                        </div> 
                </ButtonsModal> 
            </ModalItems> 
                </ModalOverlay>     
            </OverlayImageCustom>      
        </AppCustomer> 
    ); 
}; 
 
export default React.memo(SectionCustomer); 