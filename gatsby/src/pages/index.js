import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'

const IndexPage = ({ data }) => (
  <Layout>
    <h1>Bonjour à tous</h1>
    <p>Voici la liste de nos articles</p>
    <ul style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', listStyle: 'none'}}>
      {data.allStrapiArticle.edges.map(document => (
        <li key={document.node.id}>
          <Link to={`/articles/${document.node.id}`}>
            <Img 
                  fixed={document.node.image.childImageSharp.fixed}
                  alt={document.node.titre}
                  title={document.node.titre}
              />
              <p>
                {document.node.titre}
              </p>
            </Link>
        </li>
      ))}
    </ul>
    <p>
      <Link to="/articles/">Voir tous les articles</Link>
    </p>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`  
  query IndexQuery {
    allStrapiArticle {
      edges {
        node {
          id
          titre
          contenu
          image {
            childImageSharp {
                fixed(width: 200, height: 125) {
                    ...GatsbyImageSharpFixed
                }
            }
          }
        }
      }
    }
  }
`