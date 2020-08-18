import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
// import SEO from ''

class BlogPost extends Component {
  render() {
    const post = this.props.data.contentfulPost;
    return (
      <Layout>
        {/* <SEO title={post.title} description={post.subtitle} /> */}
        <h1>{post.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: post.content.childContentfulRichText.html,
          }}
        />
      </Layout>
    );
  }
}

export default BlogPost;

export const pageQuery = graphql`
  query blogPostQuery($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      subtitle
      author
      content {
        childContentfulRichText {
          html
        }
      }
    }
  }
`;
