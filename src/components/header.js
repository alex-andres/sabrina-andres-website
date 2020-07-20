import React, { useState } from 'react';
import { css } from '@emotion/core';
import NavLink from '../components/NavLink';
import NavButton from '../components/NavButton';
import { colors } from '../components/theme';

const Header = () => {
  const [menuState, _setMenuState] = React.useState(false);

  const menuStateRef = React.useRef(menuState);
  const setMenuState = data => {
    menuStateRef.current = data;
    _setMenuState(data);
  };

  // const listener = () => {
  //   console.log(`state : ${menu}`);
  // };

  return (
    <header
      css={css`
        background: #ffffff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 100;
        @media (max-width: 350px) {
          padding: 1rem;
        }
        padding: 3rem;
        box-shadow: none;
        position: sticky;
        top: 0;
        box-shadow: 0px 3px 15px ${colors.midGray};
        transition: box-shadow 0.5s;
        @media (max-width: 800px) {
          position: static;
          transition: box-shadow 0.5s;
          box-shadow: none;
        }
        [aria-expanded='true'] ~ nav {
          z-index: 1000;
          min-height: 100vh;
          min-width: 100vw;
          position: absolute;
          top: 0;
          left: 0;
          background: ${colors.white};
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}
    >
      {/* site name */}
      <NavLink
        css={css`
          font-family: ltc-bodoni-175;
          font-weight: 400;
          font-size: calc(1.2vw + 1rem);

          & + [aria-expanded='true'] {
            display: none;
          }
        `}
        to="/"
      >
        Sabrina Andres
      </NavLink>
      {/* nagvigation */}
      <button
        css={css`
          display: flex;
          justify-content: center;
          width: 60px;
          border: none;
          background: none;
          @media (min-width: 800px) {
            display: none;
          }
          &[aria-expanded='true'] {
            display: inline-block;
            position: absolute;
            top: 10px;
            right: 0;
            z-index: 10000;
            transition: 0.2s;
            svg {
              .rec-1 {
                transform-origin: 1px;
                transform: rotate(45deg);
                transition: 0.2s;
              }
              .rec-2 {
                transform-origin: 33px;
                transform: rotate(-45deg);
                transition: 0.2s;
              }
            }
          }
        `}
        aria-expanded={`${menuStateRef.current}`}
        onClick={() => {
          setMenuState(!menuStateRef.current);
        }}
      >
        <svg viewBox="0 0 100 50" width="33" height="33">
          <rect class="rec-1" width="100" height="2"></rect>
          <rect class="rec-2" y="30" width="100" height="2"></rect>
        </svg>
      </button>
      <nav
        css={css`
          grid-area: menu;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          @media (max-width: 800px) {
            display: none;
          }
        `}
      >
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
        <NavButton activeClassName="current-page" to="/contact">
          Contact
        </NavButton>
      </nav>
    </header>
  );
};

export default Header;
