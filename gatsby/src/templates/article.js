import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from "../components/seo"

const isOneDayBetweenCreationAndUpdate = (created_at, updated_at) => {
    let UniversalCreatedAtDate = new Date(created_at).getTime()
    let UniversalUpdatedAtDate = new Date(updated_at).getTime()
    let UniversalDayInMS = Math.pow(8.64, 7)
    return UniversalUpdatedAtDate > UniversalCreatedAtDate + UniversalDayInMS
}

const formatDate = (date) => {
    return new Date(date).toLocaleDateString()
}

const ArticleTemplate = ({ data }) => {
    const {titre, contenu, auteur, created_at, updated_at} = data.strapiArticle
    return (
        <Layout>
            <SEO title={titre} />
            <h1>{titre}</h1>
            <p>{contenu}</p>
            { null !== auteur &&
                <p>Par&nbsp;
                    <a href={'mailto:' + auteur.email}>
                        {auteur.username}
                    </a>
                </p>
            }
            <p>Publié le { formatDate(created_at) }</p>
            {isOneDayBetweenCreationAndUpdate(created_at, updated_at) && 
                <p>Mis à jour le { formatDate(updated_at) }</p>
            }
            <Link to="/">
                <p>Retourner à l'accueil</p>
            </Link>
            <Link to="/articles">
                <p>Retourner à la liste des articles</p>
            </Link> 
        </Layout>      
    )
}

export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($id: String!) {
    strapiArticle(id: {eq: $id}) {
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
`