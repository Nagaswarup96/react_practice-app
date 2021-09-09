import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonContainer } from './Button';
import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-lg navbar-dark px-sm-5 bg-dark">
                <Link to="/"><i className="navbar-brand fas fa-mobile-alt"></i></Link>

                <ul className="navbar-nav me-auto align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">products</Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                        <i className="fas fa-cart-plus" />
                        &nbsp;  my cart
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        )
    }
}
const NavWrapper = styled.nav`
.nav-link{

    font-size: 1.3rem;
    text-transform: capitalize;
}
`;

