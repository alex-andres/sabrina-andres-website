import { graphql, useStaticQuery } from 'gatsby';

const useProjects = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProject {
        nodes {
          title
          subtitle
          author
          slug
          image {
            fluid {
              srcWebp
              srcSetWebp
              src
              srcSet
            }
            description
          }
        }
      }
    }
  `);
  return data.allContentfulProject.nodes.map(project => ({
    title: project.title,
    subtitle: project.subtitle,
    slug: project.slug,
    image: project.image.fluid,
    alt: project.image.description,
  }));
};

export default useProjects;
