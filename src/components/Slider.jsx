import styled from "styled-components";
import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import { sliderItems } from '../pages/data';
import { useState } from "react";
import { mobile} from "../responsive";

const Container =styled.div`
width:100%;
height:100vh;
display: flex;
position:relative;
overflow: hidden;  //with this the slider images will not be shown horizontal
${mobile({ display: "none" })}

`;


const Arrow=styled.div`
width: 60px;
height: 60px;
background-color: lightblue;
border-radius:50%;
display: flex;
align-items: center;
justify-content: center;
position:absolute;
top:0;
bottom:0;
margin:auto;
left:${props=>props.direction === "left" && "10px"};
right:${props=>props.direction === "right" && "10px"};
cursor:pointer;
opacity: 0.5;
z-index: 2;
`;

const Wrapper=styled.div`
height: 100%;
display: flex;       //with flex all slide images turn in rows instead of colums
transition: all 1.5s ease;
transform:translateX(${(props)=>props.slideIndex * -100}vw);
`;

const Slide = styled.div`
width:100vw;
height: 100vh;
display:flex ;
align-items: center;
background-color: #${props=>props.bg};  // for background color of slides using props

`;


const ImgContainer = styled.div`
flex:1;
height:100%;
`;

const Image= styled.img`
height: 80%;

`;

const InfoContainer = styled.div`
flex:1;
padding: 50px;
`;

const Title = styled.h1`
font-size: 70px;
`;

const Desc = styled.p`
margin: 50px 0px;
font-size: 20px;
letter-spacing:3px;
font-weight: 500;
`;

const Button = styled.button`
padding :10px;
font-size: 20px;
cursor: pointer;
background-color: transparent;
`;


export const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction)=>{
  
    if(direction==="left"){
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    }else{
      setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0)
    }
  
  
  };

  return (
    <Container> 
      <Arrow direction="left" onClick={()=>handleClick("left")}>
      <ArrowLeftOutlined/>
</Arrow>

<Wrapper slideIndex={slideIndex}>
{sliderItems.map((item) => ( 
<Slide bg={item.bg}> 
<ImgContainer>
<Image src={item.img} />

</ImgContainer>

<InfoContainer>
<Title>{item.title}</Title>
<Desc>{item.desc}</Desc>
<Button>Shop Now</Button>

</InfoContainer>
  </Slide>
  ))}
</Wrapper>

<Arrow direction="right" onClick={()=>handleClick("right")}>
<ArrowRightOutlined/>
</Arrow>


    </Container>
  )
};