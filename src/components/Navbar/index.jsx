import React, { useState } from 'react';
import './styles.css'; // Create this CSS file for styling

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <a href="/">
                    <img src="/assets/images/logo.png" className="logo py-3" alt="" />
                </a>
            </div>
            <div className={`menu ${isOpen ? 'active' : ''}`}>
                <a href="/">Início</a>
                <a href="/produtos">Nossos produtos</a>
                <a href="/orcamento">Fazer orçamento</a>
                <a href="https://lista.mercadolivre.com.br/_CustId_1380580432">Mercado Livre</a>
            </div>
            <div className={`burger-menu ${isOpen ? 'active' : ''}`} onClick={toggleNavbar}>
                <div className={`bar ${isOpen ? 'active' : ''}`}></div>
                <div className={`bar ${isOpen ? 'active' : ''}`}></div>
                <div className={`bar ${isOpen ? 'active' : ''}`}></div>
            </div>
        </nav>
    );
};

export default Navbar;
