import React from 'react';
import styled from 'styled-components';
import { logoColor } from '../Styles/colors';
import { Title } from '../Styles/title';

export const NavbarStyled = styled.div`
  background-color: ${logoColor};
  padding: 10px;
  box-shadow: 1px 1px 1px 2px rgba(0, 0, 0, 0.2);
  color: white;
  position: fixed;
  width: 100%;
`;

const Logo = styled(Title)`
  font-size: 36px;
  color: white;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
`;

const Slogan = styled.div`
  font-size: 10px;
  color: black;
  text-align: left;
  margin-left: 65px;
  font-family: 'Open Sans', sans-serif;
`;

export function Navbar() {
  return (
    <NavbarStyled>
      <Logo>
        <span role='img' aria-label=''>
          🖋️
        </span>
        Kaviyazhan
      </Logo>
      <Slogan>Tamil Lyricist</Slogan>
    </NavbarStyled>
  );
}
