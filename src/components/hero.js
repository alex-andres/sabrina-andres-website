import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { css } from '@emotion/core';
import Img from 'gatsby-image';
import { Carousel } from 'react-bootstrap';
import Button from './Button';

const Hero = () => {
  const images = useStaticQuery(graphql`
    query {
      image: allFile(
        filter: {
          extension: { regex: "/(jpg)/" }
          relativeDirectory: { eq: "header" }
        }
      ) {
        edges {
          node {
            sharp: childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);
  return (
    <div
      className="hero-container"
      css={css`
        display: grid;
        grid-template-areas: 'carousel carousel claim claim';
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
        max-height: 100%;
      `}
    >
      <Carousel
        controls={false}
        css={css`
          grid-area: carousel;
        `}
      >
        {images.image.edges.map(({ node }) => (
          <Carousel.Item>
            <Img fluid={node.sharp.fluid} alt="Interior" />
          </Carousel.Item>
        ))}
      </Carousel>
      <div
        className="claim-cta-wrapper"
        css={css`
          grid-area: claim;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
        `}
      >
        <h1 className="hero-h1">
          What new art will you <br /> discover today?
        </h1>
        <p
          className="hero-sub-heading"
          css={css`
            margin-bottom: 2rem;
          `}
        >
          Sabrina takes the hard work out of finding new and emerging artists
        </p>
        <Button to="/contact">View Projects</Button>
      </div>
    </div>
  );
};

export default Hero;
