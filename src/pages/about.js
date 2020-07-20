import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { css } from '@emotion/core';
import Layout from '../components/layout';
import Img from 'gatsby-image';

const About = () => {
  const image = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "bernard-hermant-interior.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
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
          }
        `}
      >
        <div
          className="heading"
          css={css`
            grid-area: heading;
          `}
        >
          <h1>About</h1>
        </div>
        <div
          className="main"
          css={css`
            grid-area: main;
          `}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
            numquam et, vitae ducimus voluptatum molestias, ratione nostrum
            dolore repellendus debitis recusandae officia accusamus tempore
            voluptatem quibusdam voluptates tenetur. Rerum maxime est iste, ipsa
            voluptate, optio laborum at, eum vitae expedita voluptates magni.
            Adipisci est debitis minima soluta sequi dignissimos voluptate, esse
            nemo hic in veritatis quibusdam, illo dicta impedit, nesciunt odio
            ullam consectetur vitae ab deleniti doloremque dolorem accusantium.
            Exercitationem ex dolorum id nostrum. Sint rem mollitia, facere sit
            eaque amet quam, maiores quae, hic recusandae accusantium fugiat
            modi sapiente ut esse vel itaque aliquid temporibus iste totam
            voluptas placeat molestias. Officia illo quos doloribus hic sequi
            eos quia, nihil rerum sunt, et praesentium est consectetur, fuga
            dolores velit minus.
          </p>

          <div
            className="img"
            css={css`
              grid-area: img;
            `}
          >
            <Img fluid={image.image.sharp.fluid} />
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default About;
