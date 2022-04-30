import styled from 'styled-components'
import { Categories } from '../components/Categories';
import { Footer } from '../components/Footer';
import { Navbar } from "../components/Navbar";
import { Newsletter } from '../components/Newsletter';
import { Slider } from '../components/Slider';
import Products from "../components/Products" ;


const Container=styled.div``;

export const Home = () => {
  return (
    <Container>
    <Navbar/>
    <Slider/>
    <Categories/>
    <Products/>
    <Newsletter/>
    <Footer/>

    </Container>
  )
}
