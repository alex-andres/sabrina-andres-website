import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { css } from '@emotion/core';
import Img from 'gatsby-image';
import Button from './Button';

const Hero = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      if (index === 2) {
        // total number of images minus 1
        setIndex(0);
      } else {
        setIndex(prev => prev + 1);
      }
    }, 3000); //duration
    return () => clearInterval(timer); //cleanup
  }, [index]); //compare

  const allImagesQuery = graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)/" }
          relativeDirectory: { eq: "header" }
        }
      ) {
        totalCount
        edges {
          node {
            base
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `;

  const {
    allFile: { edges: images }, //destructuring
  } = useStaticQuery(allImagesQuery);
  return (
    <div
      className="hero-container"
      css={css`
        display: grid;
        grid-template-areas: 'slider slider claim claim';
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
        max-height: 100%;
      `}
    >
      <Img
        css={css`
          grid-area: slider;
          width: 100%;
          height: 100%;
          transition: ease-in;
        `}
        fluid={images[index].node.childImageSharp.fluid}
        alt="Interior"
        fadeIn="true"
      />
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
