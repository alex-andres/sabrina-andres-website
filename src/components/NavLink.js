import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { colors } from '../components/theme';

const NavLink = styled(Link)`
  color: ${colors.black};
  font-size: 1rem;
  font-weight: normal;
  line-height: 1.8em;
  text-decoration: none;
  font-family: Raleway;
  font-weight: 300;
  padding: 0.25em;
  transition: 0.5s;

  &.current-page {
    border-bottom: 2px solid ${colors.black};
    margin-bottom: 0.25rem;
  }
  &:hover {
    transition: 0.5s;
    color: ${colors.midGray};
  }
`;

export default NavLink;
