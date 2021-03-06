import React from 'react';
import Routes from '../../routes';
import Icon from './Icon';
import {
  Nav,
  NavbarLink,
  NavbarList,
  NavbarListItem,
  NavbarLogo,
  NavbarLogoLink,
  NavbarWrap,
} from './styles';

const Navbar = () => {
  return (
    <Nav>
      <NavbarWrap>
        <NavbarLogoLink to={Routes.HOME}>
          <Icon />
          <NavbarLogo>Rick and Morty</NavbarLogo>
        </NavbarLogoLink>
        <NavbarList>
          <NavbarListItem>
            <NavbarLink to={Routes.EPISODES}>Episodes</NavbarLink>
          </NavbarListItem>
          <NavbarListItem>
            <NavbarLink to={Routes.CHARACTERS}>Characters</NavbarLink>
          </NavbarListItem>
          <NavbarListItem>
            <NavbarLink to={Routes.LOCATIONS}>Locations</NavbarLink>
          </NavbarListItem>
        </NavbarList>
      </NavbarWrap>
    </Nav>
  );
};

export default Navbar;
