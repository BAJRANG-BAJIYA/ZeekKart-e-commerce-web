import styled from 'styled-components'
import {categories} from "../pages/data"
import CategoryItem from './CategoryItem';

const Container = styled.div`
display:flex;
justify-content: space-between;
height: 100vh;
`;



export const Categories = () => {
  return (
    <Container>
    {categories.map(item=>(<CategoryItem item ={item} key={item.id}/>))}
    </Container>
  )
};
