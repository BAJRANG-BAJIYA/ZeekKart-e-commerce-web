import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Cart } from "./pages/Cart";
import styled from "styled-components";
import {React, BrowserRouter, Routes, Route} from "react-router-dom";
import Prods from "./pages/Prods";


const Container=styled.div`
`;

function App() {
  return (
    <Container>
    <BrowserRouter>
<Routes>
          <Route path='/' exact element ={<Home/>} />
          <Route path='/Login' exact element ={<Login/>} />
          <Route path='/Register' exact element ={<Register/>} />
          <Route path='/Cart' exact element ={<Cart/>} />
          <Route path='/Prods' element ={<Prods/>} />

</Routes>

    </BrowserRouter>

    </Container>
  );
}

export default App;
