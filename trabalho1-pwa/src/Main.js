import React from "react";
import "./main.css"
import {Route, Routes} from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import Galeria from "./pages/galeria";
import Fruta from "./pages/frutas/Fruta";
import ListagemApi from "./pages/api/listagemApi";
import Automovel from "./pages/automoveis";
import Footer from "./components/footer";

class Main extends React.Component{
    render(){
        return(
            <div className="App">
                <Header/>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path="/galeria" element={<Galeria/>}/>
                    <Route path="/frutas" element={<Fruta/>}/>
                    <Route path="/api" element={<ListagemApi/>}/>
                    <Route path="/automoveis" element={<Automovel/>}/>
                </Routes>
                <Footer/>
            </div>
        );
    }
}

export default Main;