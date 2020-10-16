const path = require('path');


module.exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const projectTemplate = path.resolve("./src/templates/project-post-contentful.js");
  const response = await graphql(`
    query {
      allContentfulProject  {
        edges{
          node {
            slug
          }
        }  
      }
    }
  `)  
  response.data.allContentfulProject.edges.forEach( edge => {
    createPage({
      component: projectTemplate, 
      path: `/projects/${edge.node.slug}/`,
      context: {
        slug: edge.node.slug,
      }
    });
  })
}

