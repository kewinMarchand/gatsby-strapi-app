import React, { Fragment } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Button, Grid, Typography } from '@material-ui/core'

const formatAuthor = (auteur) => {
    return (
        <Link to={`/authors/User_${auteur.id}`}>
            {auteur.username}
        </Link>
    )
}

const Articles = ({ data }) => (
    <Layout>
        <SEO title="Articles" />
        <Typography variant={'h1'}>
            Articles
        </Typography>
        <Typography gutterBottom>
            Tous nos articles
        </Typography>
        <Grid container 
            component={'ul'} 
            spacing={4}
            direction={'column'}
            style={{listStyle: 'none', marginTop: 32}}
        >
        {data.allStrapiArticle.edges.map(document => {
            const {id, titre, contenu, auteur} = document.node
            return (
                <Grid item 
                    component={'li'} 
                    key={id}
                >
                    <Link to={`/articles/${id}`}>
                        <Typography variant={'h2'} gutterBottom>
                            {titre}
                        </Typography>
                        <Fragment>
                            {contenu.slice(0, 152)}...
                        </Fragment>
                    </Link>
                    {null !== auteur &&
                        <Typography component={'p'} variant={'caption'}>
                            Par&nbsp;{ formatAuthor(auteur) }
                        </Typography>
                    }
                </Grid>
            )
        })}
        </Grid>
        <Grid container justify={'center'}>
            <Link to="/">
                <Button size={'small'}>
                    <Typography variant={'caption'}>
                        Retourner à l'accueil
                    </Typography>
                </Button>
            </Link>
        </Grid>
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
                        id
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