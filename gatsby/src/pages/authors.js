import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import GoHomeCta from '../components/buttons/GoHomeCta'

import { Grid, Typography } from '@material-ui/core'

const formatAuthor = (username, id) => {
    return (
        <Link to={`/authors/${id}`}>
            {username}
        </Link>
    )
}

const Authors = ({ data }) => {
    return (
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
                spacing={2}
                direction={'column'}
                style={{flexGrow: 1, listStyle: 'none', marginTop: 32}}
            >
            {data.allStrapiUser.edges.map(document => {
                const {id, username} = document.node
                return (
                    <Grid item 
                        component={'li'} 
                        key={id}
                    >
                        {null !== username &&
                            <Typography component={'p'} variant={'h6'}>
                                { formatAuthor(username, id) }
                            </Typography>
                        }
                    </Grid>
                )
            })}
            </Grid>
            <Grid container 
                justify={'center'}
                style={{marginTop: 32}}
            >
                <GoHomeCta/>
            </Grid>
        </Layout>
    )}

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