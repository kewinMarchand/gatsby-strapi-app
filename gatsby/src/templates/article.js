import React, { Fragment } from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'
import GoHomeCta from '../components/buttons/GoHomeCta'
import GoPostsCta from '../components/buttons/GoPostsCta'

import { Grid, Typography } from '@material-ui/core'

const isOneDayBetweenCreationAndUpdate = (created_at, updated_at) => {
    let UniversalCreatedAtDate = new Date(created_at).getTime()
    let UniversalUpdatedAtDate = new Date(updated_at).getTime()
    let UniversalDayInMS = Math.pow(8.64, 7)
    return UniversalUpdatedAtDate > UniversalCreatedAtDate + UniversalDayInMS
}

const formatDate = (date) => {
    return new Date(date).toLocaleDateString()
}

const formatAuthor = (auteur) => {
    return (
        <Link to={`/authors/User_${auteur.id}`}>
            {auteur.username}
        </Link>
    )
}

const ArticleTemplate = ({ data }) => {
    const {titre, image, contenu, auteur, created_at, updated_at} = data.strapiArticle
    return (
        <Layout>
            <SEO title={titre} />
            <Typography
                component={'p'}
                variant={'caption'}
                align={'right'}
            >
                Publié le { formatDate(created_at) }
            </Typography>
            <Img 
                fluid={image.childImageSharp.fluid}
                alt={titre}
                title={titre}
                style={{marginBottom: 40}}
            />
            <Typography variant={'h1'} gutterBottom>
                {titre}
            </Typography>
            <Fragment>
                {null !== contenu && contenu}
            </Fragment>
            { null !== auteur &&
                <Typography component={'p'} variant={'caption'}>
                    Par { formatAuthor(auteur) }
                </Typography>
            }
            {isOneDayBetweenCreationAndUpdate(created_at, updated_at) && 
                <Typography component={'p'} variant={'caption'}>
                    Mis à jour le { formatDate(updated_at) }
                </Typography>
            }
            <Grid container 
                justify={'space-between'}
                style={{marginTop: 32}}
            >
                <GoHomeCta/>
                <GoPostsCta/>
            </Grid>
        </Layout>      
    )
}

export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($id: String!) {
    strapiArticle(id: {eq: $id}) {
        titre
        image {
            childImageSharp {
                fixed(width: 600, height: 375) {
                    ...GatsbyImageSharpFixed
                }
                fluid(maxWidth: 1400, maxHeight: 875) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        contenu
        auteur {
            id
            username
            email
        }
        created_at
        updated_at
    }
  }
`