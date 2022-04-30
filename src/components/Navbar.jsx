import { ShoppingCartRounded } from '@mui/icons-material';
import styled from "styled-components";
import { Badge } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { mobile, tablet, laptop } from "../responsive";
import {NavLink} from "react-router-dom";


const Container = styled.div`
  height: 60px;
  width:100vw;
  background-color: rgb(2, 137, 117);
  color:white;
  ${mobile({height:"50px"})};
  ${tablet({height:"55px"})};
  ${laptop({height:"60px"})};

`;


const Wrapper = styled.div`
  display: flex;
  align-items: center;
  ${mobile({ padding: "10px 0px" })}

`;

const Left = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
margin-top: 5px;
padding-top:5px;
  font-weight: 500;
  align-items: center;
  cursor: pointer ;
  font-family: 'Lobster', cursive;
  ${mobile({ padding: "10px 0px" })}
  &:hover {color: rgb(255, 244, 35);
    transition:  0.5 ease-in;
    transform: scale(1.1);
  };

`;


const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
display:flex;
align-items: center;
padding:5px 3px;
background:whitesmoke;
outline: none;
`;

const StyledInputBase =styled.input`
width:300px;
background:whitesmoke;
border: 0ch;
outline: none;
${mobile({ width: "50px" })}
${tablet({ width: "55px" })}
${laptop({ width: "60px" })}
`;

const SearchIconWrapper =styled.div`
font-size: 16px;
cursor: pointer ;
margin-right: 10px;
margin-left:20px;
color:black;

`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-family: 'Josefin Sans', sans-serif;
  font-size:25px;
  ${mobile({ flex: 2, justifyContent: "center" })}
  ${tablet({ flex: 1.5, justifyContent: "center" })}
  ${laptop({ flex: 1, justifyContent: "center" })}
`;


const NavMenu = styled.div`
  font-size: 16px;
  cursor: pointer;
  margin-right: 60px;
  font-family: 'Poppins', sans-serif;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
  ${tablet({ fontSize: "14px", marginLeft: "10px" })}
  ${laptop({ fontSize: "16px", marginLeft: "10px" })}
  `;

const login = styled.div`
  font-size: 16px;
  cursor: pointer;
  margin-right: 60px;
  font-family: 'Poppins', sans-serif;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
  ${tablet({ fontSize: "14px", marginLeft: "10px" })}
  ${laptop({ fontSize: "16px", marginLeft: "10px" })}
  `;



const CartDiv =styled.div`
margin-right:45px;`;


export const Navbar = () => {
  return (
    <Container>
    <Wrapper>
    
    <Left><Logo>ZeekKart</Logo></Left>
    
            <Center>
              <SearchContainer>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                />
                  <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
              </SearchContainer>
            
            </Center>
    
            <Right>
            <NavMenu >REGISTER</NavMenu>
            <NavMenu >SIGN IN</NavMenu>
         
            <CartDiv> 
    <Badge badgeContent={2} color="primary">
            <ShoppingCartRounded />
      </Badge>
      </CartDiv>
           
            </Right>
          </Wrapper>
        </Container>

  )
}
