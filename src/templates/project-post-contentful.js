import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { css } from '@emotion/core'; 
import Img from 'gatsby-image';
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export const query = graphql`
  query($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      title
      subtitle
      content {
        json
      }
    }
  }
`;

const Project = ({data}) => {
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return <img src={url} alt={alt} /> 
      }
    }
  }

  return (
    <Layout>
      <h1>{data.contentfulProject.title}</h1>
      <div>
        {documentToReactComponents(data.contentfulProject.content.json, options)}
      </div>
    </Layout>
  );
};

export default Project;
