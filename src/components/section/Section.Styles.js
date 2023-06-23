import styled from "styled-components";

/// Section Content

export const DivSectionBg = styled.div`
  position: relative;
  top: -1px;
  background-color: #ebebeb;
  width: 1903px;
  height: 650px;
  display: grid;
  place-items: center;
`;
export const TitleSection = styled.div`
  width: 100%;
  height: 250px;
  display: grid;
  place-items: center;
  position: absolute;
  top: 0;
  margin: 30px 0;
`;

export const H2SectionCt = styled.h2`
  font-size: 30px;
  font-weight: 650;
  color: #606060;
`;

export const H4SectionCt = styled.h2`
  text-align: center;
  font-size: 18px;
  line-height: 30px;
`;

export const ImgBgSection = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 350px;
  display: grid;
  place-items: center;
`;

export const ImgSectionContent = styled.img`
  width: 85%;
  height: 350px;
  object-fit: cover;
  position: absolute;
  bottom: 0px;
  box-shadow: rgba(0, 0, 0, 0.7) 0px -4px 15px;
  border-radius: 6px;
`;

/// Section Flatsome

export const SectionFlatFather = styled.div`
  width: 1903px;
  height: 600px;
  z-index: 1;
`;

export const SectionHd = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 55%;
  position: relative;
  left: 22.5%;
`;

export const SectionTitleB = styled.b`
  background-color: currentColor;
  display: block;
  margin: 0 20px;
  flex: 1;
  height: 2px;
  opacity: 0.1;
`;

export const SectionHdH3 = styled.div`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 20px;
  color: #4e4e4e;
`;

export const DivSectionRelative = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 500px;
`;

export const SectionFlex = styled.div`
  width: 310px;
  height: 450px;
`;
export const ImgSecFlatsome = styled.img`
  width: 300px;
  height: 150px;
  margin: 0 5px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.76) 0px 1px 10px;
  object-fit: cover;
  border: 1px solid #fff;
  transition: all 0.4s;
  &:hover {
    transform: scale(1.1);
  }
`;

export const SectionTitles = styled.div`
  margin: 10px;
  line-height: 25px;
  text-align: center;
`;

export const H3Flatsome = styled.h3`
  margin-top: 20px;
  font-weight: 650;
  font-size: 25px;
  color: #4e4e4e;
`;
export const PFlatsome = styled.p`
  margin-top: 20px;
  color: #4e4e4e;
`;
export const AFlatsome = styled.a`
  text-decoration: none;
  position: relative;
  display: inline-block;
  &::before {
    content: "";
    background-color: #446084;
    bottom: -7px;
    height: 2px;
    left: 13.5%;
    opacity: 0.3;
    position: absolute;
    transition: all 0.3s;
    width: 75%;
  }
  &:hover::before {
    transform: scale(1.3);
    opacity: 1;
  }
`;

export const SpanFlatsome = styled.h3`
  margin-top: 25px;
  color: #446084;
  font-weight: 600;
  font-size: 16.5px;
  text-transform: uppercase;
`;

/// Section Shop Demos

export const SectionHdShops = styled.div`
  width: 1903px;
  height: 2170px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: #ebebeb;
`;

export const TitleShopDemos = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 200px;
`;

export const TitleShopDemosH1 = styled.h1`
  font-size: 23px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #4e4e4e;
`;

export const TitleShopDemosH3 = styled.h3`
  line-height: 27px;
  font-size: 21px;
  color: #4e4e4e;
`;

export const SecTitleShop = styled.div`
  display: flex;
  width: 1000px;
  justify-content: center;
  align-items: center;
`;
export const TitleShopLinesH2 = styled.h3`
  margin: 25px 0;
  font-size: 20px;
  font-weight: 500;
  text-transform: uppercase;
  color: #4e4e4e;
`;

export const SectionShopB = styled.b`
  background-color: currentColor;
  display: block;
  margin: 0 15px;
  flex: 1;
  height: 2px;
  opacity: 0.1;
`;

export const ContainerImgFlex = styled.div`
  width: 100%;
  height: 200px;
`;
export const ShopContainerImg = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(5, 1fr);
  width: 1050px;
  height: 1900px;
  margin-left: auto;
  margin-right: auto;
  gap: 10px;
`;

export const ShopDivItem = styled.div`
  width: 310px;
  height: 340px;
  transition: all 0.4s;
  border-radius: 10px;
  display: grid;
  place-items: center;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 12px;
  background-color: #fff;
  &:hover {
    transform: scale(1.05);
  }
`;

export const ShopAItem = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  width: 300px;
  height: 330px;
  text-decoration: none;
  color: black;
`;

export const ShopImgItem = styled.div`
  width: 300px;
  height: 300px;
`;

export const ImgShopDemos = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

export const DivTitleShop = styled.div`
  height: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleShopP = styled.p`
  color: black;
`;

// Business Demos

export const SectionBusinessDiv = styled.div`
  width: 100%;
  height: 890px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: #ebebeb;
`;

export const ContainerH1Business = styled.div`
  display: flex;
  width: 1000px;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
`;

export const H1Business = styled.h1`
  margin: 25px 0;
  font-size: 20px;
  font-weight: 500;
  text-transform: uppercase;
  color: #4e4e4e;
`;

export const BLineBusiness = styled.b`
  background-color: currentColor;
  display: block;
  margin: 0 15px;
  flex: 1;
  height: 2px;
  opacity: 0.1;
`;

export const WrapBusinessItem = styled.div`
  width: 100%;
  height: 200px;
`;
export const FatherDivBusiness = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  width: 1050px;
  height: 500px;
  margin-left: auto;
  margin-right: auto;
  gap: 15px;
  grid-row-gap: 35px;
`;

export const ContaiBusinessDiv = styled.div`
  width: 310px;
  height: 340px;
  transition: all 0.4s;
  border-radius: 10px;
  display: grid;
  place-items: center;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 12px;
  background-color: #fff;
  &:hover {
    transform: scale(1.05);
  }
`;

export const ABusinessDemos = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  width: 300px;
  height: 330px;
  text-decoration: none;
  color: black;
`;

export const DivImgBusiness = styled.div`
  width: 300px;
  height: 300px;
`;
export const ImgBusiness = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;
export const CoverBusinessP = styled.div`
  height: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Section Bg Overlay

export const AboutOverlay = styled.div`
   background-image: url(https://w.wallhaven.cc/full/1p/wallhaven-1pr3w1.png);
   background-repeat: no-repeat;
   background-size: 100%;
   object-fit: cover;
   width: 100%;
   height: 600px;
`

export const ContainerOverlayAbout = styled.div`
	background-color: rgba(0,0,0,.66);
	width: 100%;
	height: 100%;
	display: grid;
	place-items: center;
`

export const AboutCompany = styled.div`
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
`

export const AboutAvatar = styled.div`
	
`
export const AvatarImgAbout = styled.img`
	width: 120px;
	height: 120px;
  	object-fit: cover;
	border-radius: 50%;
	border: 3px solid white;
`


export const AboutH1 = styled.h1`
	font-size: 33px;
	font-weight: 600;
	color: #fff;
`

export const AboutH4 = styled.h4`
	font-size: 21px;
	font-weight: 400;
	color: #f1f1f1;
	line-height: 28px;
`

export const ButtonAboutA = styled.a`
	color: #fff;
	text-decoration: none;
	width: 150px;
	height: 39px;
	border-radius: 7px;
	border: 2px solid #fff;
	display: grid;
	place-items: center;
	margin-top: 10px;
	transition: all 0.4s;
	&:hover {
		background-color: #fff;
		color: #4e4e4e;
	}
`

export const ButtonAboutSpan = styled.span`
	font-size: 18px;
	font-weight: 500;
	text-transform: uppercase;
`

// Section Customer


export const CustomerCard = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`

export const AppCustomer = styled.div`
    width: 100%;
   	height: 500px;
	background-color: #ebebeb;
`
export const CustomerTitle = styled.div`
	display: grid;
	place-items: center;
	height: 200px;
	text-align: center;
`
export const CustomerH1 = styled.h1`
	font-size: 30px;
	font-weight: 600;
	color: #4e4e4e;
`
export const CustomerH6 = styled.h6`
	font-weight: 400;
	line-height: 25px;
	color: #4e4e4e;
`
export const CustomerA = styled.a`
	width: 200px;
	height: 40px;
	background-color: #446084;
	border-radius: 10px;
	text-decoration: none;
	display: grid;
	place-items: center;
	transition: all 0.4s;
	&:hover {
		background-color: #293e58;
	}
`

export const CustomerSpan = styled.span`
	font-size: 18px;
	font-weight: 600;
	text-transform: uppercase;
	color: white;
`


export const MainSlider = styled.div`
	width: 1165px;
	height: 230px;
	margin-right: auto;
	margin-left: auto;
	position: relative;
	&:hover .hover-button {
		display: block;
		color: #293e58;
	}

`
export const CardCustomer = styled.div`
	width: 1065px;
	height: 240px;
	position: relative;
	top: 15px;
	left: 22px;

`

export const CardItemSlider = styled.div`
	width: 345px;
	height: 200px;
	box-shadow: rgba(0, 0, 0, 0.45) 0px 9px 15px;
	transition: all 0.5s;
	border-radius: 8px;
	&:hover {
		transform: scale(1.03);
	}
`

export const SliderImg = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 8px;
	object-fit: cover;
`

export const CoverSliderImg = styled.div`
	width: 100%;
	height: 100%;
`

export const Buttons = styled.div`
	width: 100%;
	z-index: 1;
	
	.hover-button {
		display: none;
		animation: hoverbutton ease-in 0.6s;
		transition: all 0.5s;
	}
	@keyframes hoverbutton {
		from{
            opacity: 0;
        }
        to {
			opacity: 1;
			
        }
	}
	button {
		width: 2rem;
		height: 2rem;
		color: white;
		position: absolute;
		top: 45%; 
		transition: all 0.5s;
	}

	button:hover {
		color: #293e58;
	}
	.back {
		font-size: 30px;
		left: 30px;
	}

	.next {
		font-size: 30px;
		right: 30px;
	}
`


export const OverlayImageCustom = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
    display: none;
    animation: hoverbuttonmodal linear 0.3s;
	&.open {
    display: block;
  }
`

export const ModalItems = styled.div`
	width: 700px;
	height: 500px;
`

export const ModalOverlay = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.4);
	display: grid;
	place-items: center;
`

export const ModalImg = styled.div`
	width: 700px;
	height: 500px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    
`

export const ItemImgOverlay = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
    animation:  modalImg linear 0.5;
    @keyframes modalImg {
		from{
        transform: scale(0.5);
        }
        to {
        transform: scale(1);
			
        }
	}
`

export const ButtonsModal = styled.div`
	width: 100%;
	z-index: 1;
	
	.hover-button-modal {
		/* display: none; */
		animation: hoverbuttonmodal ease-in 0.6s;
		transition: all 0.5s;
	}
	@keyframes hoverbuttonmodal {
		from{
        opacity: 0;
        }
        to {
			opacity: 1;
			
        }
	}
	button {
		width: 2rem;
		height: 2rem;
		color: white;
		position: absolute;
		top: 45%; 
		transition: all 0.5s;
	}

	button:hover {
		color: #293e58;
	}
	.back-modal {
		font-size: 30px;
		left: 30px;
	}

	.next-modal {
		font-size: 30px;
		right: 30px;
	}
`


// Section Features 

export const SectionFeaturesHeads = styled.div`
	width: 100%;
	height: 1250px;
	.features-body {
		width: 1070px;
		height: 700px;
		margin-left: auto;
		margin-right: auto;
	}
`

export const TitleFeatures = styled.div`
	height: 60px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	h1{
		font-size: 19px;
		font-weight: 600;
		color: #4e4e4e;
	}
	b {
		background-color: currentColor;
    	display: block;
    	margin: 0 15px;
    	flex: 1;
    	height: 2px;
    	opacity: 0.1;
	}
`

export const ImgFeaturesCard = styled.div`
	height: 1190px;
	width: 850px;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: repeat(5, 1fr);
	.features-card {
		width: 246px;
		height: 194px;
		margin: 10px;
		background-color: #e4e9ed;
		border-radius: 8px;
		display: grid;
		place-items: center;
		overflow: hidden;
	}
	.zoom-image {
		width: 236px;
		height: 184px;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
		transition: all 0.5s;
	}

	.zoom-image:hover {
		transform: scale(1.1);
	}

	a {
		width: 100%;
		height: 100%;
		text-decoration: none;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
	}
	h1 {
		font-size: 18px;
		font-weight: 600;
		color: #293e58;
	}
	img {
		width: 230px;
		height: 120px;
		object-fit: cover;
		border-radius: 8px;
	}

	p {
		font-size: 13px;
		color: #a6b4c5;
	}
`


/// Flatsome Element

export const ElementHead = styled.div`
	width: 100%;
	height: 835px;
`

export const TitleElement = styled.div`
	height: 70px;
	width: 1000px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 15px;
	.h2-element {
		font-size: 20px;
		font-weight: 600;
		color: #4e4e4e;
	}
	b {
		background-color: currentColor;
    	display: block;
    	margin: 0 15px;
    	flex: 1;
    	height: 2px;
    	opacity: 0.1;
	}
`

export const CardElement = styled.div`
	width: 1065px;
	height: 650px;
	display: grid;
	grid-template-columns: repeat(8, 1fr);
	grid-template-rows: repeat(5, 1fr);
	margin-left: auto;
	margin-right: auto;
	.card-item {
		width: 115px;
		height: 115px;
		overflow: hidden;
		padding: 10px;
		box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 9px;
		transition: all 0.5s;
		border-radius: 5px;
	}
	.card-item:hover {
		transform: scale(1.06);
	}
	a {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		text-decoration: none;
	}
	.img-card {
		width: 99%;
		height: 80%;
		object-fit: cover;
	}

	.p-card {
		font-size: 13px;
		color: #4e4e4e;
	}
`

export const ButtonElement = styled.button`
	width: 260px;
	height: 45px;
	background-color: #446084;
	margin-left: auto;
	margin-right: auto;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 8px;
	margin-top: 15px;
	transition: all 0.5s;
	&:hover {
		background-color: #23344a;
	}
	a {
		width: 100%;
		height: 100%;
		text-decoration: none;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	&:hover .h3-button {
		transform: translateX(-0.5em);
	}
	&:hover .i-icon {
		opacity: 1;
	}
	.h3-button {
		font-weight: 600;
		font-size: 19px;
		text-transform: uppercase;
		color: white;
		position: relative;
		transition: opacity .3s,transform .3s;
		left: 11px;
	}
	.i-icon {
		color: white;
		position: relative;
		left: 10px;
		opacity: 0;	
		font-size: 20px;
		transition: opacity .3s;
	}
`

