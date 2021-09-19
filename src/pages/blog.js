import React from "react"
import { useStaticQuery, graphql, Link} from 'gatsby'
import Layout from "../components/Layout";
const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  
  return (
      <Layout>
        
          <ol>
          { data.allMarkdownRemark.edges.map((edge, indx) => (
            
              <li key={indx}>
                <Link to={`/blog/${edge.node.fields.slug}`}>
                <h2>{edge.node.frontmatter.title}</h2>
                <p>{edge.node.frontmatter.date}</p>
                {edge.node.html}
                </Link>
              </li>
            
          ))}
          </ol>

      </Layout>
    );

}

export default Blog;