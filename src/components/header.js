import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import NavLink from '../components/NavLink';
import { colors } from '../components/theme';

const Header = () => (
  <header
    css={css`
      background: #ffffff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 3rem;
      box-shadow: none;
      position: sticky;
      top: 0;
      box-shadow: 0px 3px 15px ${colors.midGray};
    `}
  >
    {/* site name */}
    <NavLink
      css={css`
        font-family: ltc-bodoni-175;
        font-weight: 400;
        font-size: calc(1.2vw + 1rem);
      `}
      to="/"
    >
      Sabrina Andres
    </NavLink>
    {/* nagvigation */}
    <nav>
      <NavLink activeClassName="current-page" to="/about">
        About
      </NavLink>
      <NavLink activeClassName="current-page" to="/my-services">
        My Services
      </NavLink>
      <NavLink activeClassName="current-page" to="/projects">
        Projects
      </NavLink>
      <NavLink activeClassName="current-page" to="/blog">
        Blog
      </NavLink>
      <NavLink
        css={css`
          background-color: black;
          color: white;
          padding: 1rem 1.5rem;
          margin-left: 0.5rem;
          transition: 0.5s;
          &:hover {
            background-color: #f1f1ef;
            color: black;
            transition: 0.5s;
          }
        `}
        activeClassName="current-page"
        to="/contact"
      >
        Contact
      </NavLink>
    </nav>
  </header>
);

export default Header;
