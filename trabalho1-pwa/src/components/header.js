import React from 'react';
import {Link} from "react-router-dom";

const Header = () => (
    <header>
        <h1>Trabalho PWA</h1>
        <div>
            <Link to={"/"}><button>Página Principal</button></Link>
            <Link to="/galeria"><button>Imagens</button></Link>
            <Link to="/frutas"><button>Lista de Frutas</button></Link>
            <Link to="/automoveis"><button>Ver Automóveis</button></Link>
            <Link to="/api"><button>Lista de Itens API</button></Link>
        </div>
    </header>
);

export default Header;