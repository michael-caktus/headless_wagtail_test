import React from 'react';
import styled from 'styled-components';

// Assets
import logo from '../../../assets/lp_logo.png'
import { colorWhite, colorBlack } from '../../../styles/styleVariables';

const GlobalHeader = props => {
  return (
    <GlobalHeaderStyled>
      <LogoWrapper>
        <img src={logo}/>
      </LogoWrapper>
      <Nav>
        <li>Grades</li>
        <li>About Us</li>
        <li>Careers</li>
        <div>Schedule a Visit</div>
      </Nav>
      <Search>
        <p>Search</p>
      </Search>
    </GlobalHeaderStyled>
  );
}

const GlobalHeaderStyled = styled.div`
  height: 10rem;
  background-color: '#fff';
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: ${colorWhite};
  color: ${colorBlack};
`;

const LogoWrapper = styled.div`

  img {
    width: 15rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 40%;
  div {
    padding: 1rem 2rem;
    background-color: red;
    color: white;
  }
`;

const Search = styled.div`
  
`;

export default GlobalHeader;
