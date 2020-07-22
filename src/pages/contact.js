import React from 'react';
import { css } from '@emotion/core';
import Layout from '../components/layout';

export default () => (
  <Layout>
    <div
      css={css`
        display: grid;
        grid-template-areas:
          'heading main main'
          'heading img img';
        grid-gap: 30px;
        @media (max-width: 800px) {
          grid-template-areas: 'heading' 'main' 'img';
          grid-gap: 30px;
        }
      `}
    >
      <div
        className="heading"
        css={css`
          grid-area: heading;
        `}
      >
        <h1>Contact</h1>
      </div>
      <div
        className="main"
        css={css`
          grid-area: main;
        `}
      >
        <form
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>
              Your Name: <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type="email" name="email" />
            </label>
          </p>
          <p>
            <label>
              Messeosage: <textarea name="message"></textarea>
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>

        <div
          className="img"
          css={css`
            grid-area: img;
          `}
        ></div>
      </div>
    </div>
  </Layout>
);
