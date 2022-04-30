import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
flex: 1;
margin: 3px;
height:70vh;
position: relative;
`;

const Image =styled.img`
height:100%;
width: 100%;
object-fit: cover;

`;

const Info =styled.div`
position:absolute;
top: 0;
left: 0;
height:100%;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;


`;


const Title =styled.h1`
color:white;
margin-bottom: 20px;
`;

const Button=styled.button`
border: none;
padding: 10px;
color:white;
background-color: skyblue;
cursor: pointer;
border-radius: 5px;
font-weight: 600;
`;




const CategoryItem = ({item}) => {
  return (
    <Container>
    <Image src={item.img}/>
    <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
    </Info>

    
    
    </Container>
  )
};
 export default CategoryItem;
