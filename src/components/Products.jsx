import React from 'react';
import styled from 'styled-components';
import {popularProducts} from "../pages/data";
import Product from "./Product"; 



const Container = styled.div`
padding:20px;
display:flex;
flex-wrap: wrap;
justify-content: center;

`;


const Products = () => {
  return (
    <Container>
    {popularProducts.map(item=>(<Product item ={item} key={item.id} />
    ))}
    
    </Container>
  )
};
export default Products;
