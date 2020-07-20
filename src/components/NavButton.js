import React from 'react';
import styled from '@emotion/styled';
import NavLink from '../components/NavLink';
import { colors } from '../components/theme';

const NavButton = styled(NavLink)`
  background-color: black;
  color: white;
  padding: 1rem 1.5rem;
  margin-left: 0.5rem;
  transition: 0.5s;
  &:hover {
    background-color: ${colors.lightGray};
    color: black;
    transition: 0.5s;
  }
`;
export default NavButton;
