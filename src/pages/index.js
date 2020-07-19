import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default () => (
  <Layout>
    <h1>Sabrina Andres</h1>
    <p>Hello Los Angeles!</p>
    <Link to="/about"> Learn About Me &rarr;</Link>
  </Layout>
);
