import React, { Fragment } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Button, Grid, Typography } from '@material-ui/core'

const formatAuthor = (username, id) => {
    return (
        <Link to={`/authors/${id}`}>
            {username}
        </Link>
    )
}

const Authors = ({ data }) => (
    <Layout>
        <SEO title="Articles" />
        <Typography variant={'h1'}>
            Auteurs
        </Typography>
        <Typography gutterBottom>
            Tous nos auteurs
        </Typography>
        <Grid container 
            component={'ul'} 
            spacing={4}
            direction={'column'}
            style={{listStyle: 'none', marginTop: 32}}
        >
        {data.allStrapiUser.edges.map(document => {
            const {id, username} = document.node
            return (
                <Grid item 
                    component={'li'} 
                    key={id}
                >
                    <Link to={`/authors/${id}`}>
                      
                    </Link>
                    {null !== username &&
                        <Typography component={'p'} variant={'h6'}>
                            { formatAuthor(username, id) }
                        </Typography>
                    }
                </Grid>
            )
        })}
        </Grid>
        <Grid container justify={'center'}>
            <Link to="/">
                <Button size={'small'}>
                    Retourner à l'accueil
                </Button>
            </Link>
        </Grid>
    </Layout>
)

export default Authors

export const pageQuery = graphql`  
    query AuthorsQuery {
        allStrapiUser {
            edges {
                node {
                    id
                    username
                    email
                }
            }
        }
    }
`