import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Articles = ({ data }) => (
  <Layout>
    <SEO title="Articles" />
    <h1>Articles</h1>
    <p>Tous nos articles</p>
    <ul>
        {data.allStrapiArticle.edges.map(document => {
            const {id, titre, contenu, auteur, created_at, updated_at} = document.node
            return (
                <li key={id}>
                    <h2>
                        <Link to={`/articles/${id}`}>{titre}</Link>
                    </h2>
                    <p>{contenu.slice(0, 152)}...</p>
                    { null !== auteur &&
                        <p>Par&nbsp;
                            <a href={'mailto:' + auteur.email}>
                                {auteur.username}
                            </a>
                        </p>
                    }
                </li>
            )
        })}
    </ul>
    <Link to="/">Retourner à l'accueil</Link>
  </Layout>
)

export default Articles

export const pageQuery = graphql`  
  query ArticlesQuery {
    allStrapiArticle {
      edges {
        node {
          id
          titre
          contenu
          auteur {
              username
              email
          }
          created_at
          updated_at
        }
      }
    }
  }
`