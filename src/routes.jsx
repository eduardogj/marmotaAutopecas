import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home/Home";
import Produtos from "./screens/Produtos/Produtos";
import Email from "./screens/Email";

export default function Routing() {
    return(
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/produtos" element={<Produtos/>} />
            <Route exact path="/orcamento" element={<Email/>}/>
        </Routes>
      </BrowserRouter>
    )
}