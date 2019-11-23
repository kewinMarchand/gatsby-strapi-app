import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = ({ data }) => (
  <Layout>
    <h1>Bonjour à tous</h1>
    <p>Voici la liste de nos articles</p>
    <ul>
      {data.allStrapiArticle.edges.map(document => (
        <li key={document.node.id}>
            <Link to={`/articles/${document.node.id}`}>{document.node.titre}</Link>
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
        }
      }
    }
  }
`