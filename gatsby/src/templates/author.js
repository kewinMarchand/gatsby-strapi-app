import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'

import { Button, Grid, Typography } from '@material-ui/core'

const UserTemplate = ({ data }) => (
    <Layout>
        <SEO title={'Page de' + data.strapiUser.username} />
        <Typography variant={'h1'} gutterBottom>
            Page de {data.strapiUser.username}
        </Typography>
        <a href={'mailto:' + data.strapiUser.email}>
            <Typography variant={'caption'}>
                {data.strapiUser.email}
            </Typography>
        </a>
        <Grid container 
            component={'ul'} 
            spacing={4}
            style={{marginTop: 32}}
        >
            {data.strapiUser.articles.map(article => (
            <Grid item 
                xs={6} 
                container={'li'} 
                key={article.id}
            >
                <Link to={`/articles/Article_${article.id}`}
                    style={{
                        maxWidth: '100%'
                    }}
                >
                    <Img 
                        fixed={article.image.childImageSharp.fixed}
                        alt={article.titre}
                        title={article.titre}
                        style={{
                            display: 'block', 
                            margin: 'auto',
                            marginBottom: 16,
                            maxWidth: '100%'
                        }}
                        imgStyle={{
                            maxWidth: '100%'
                        }}
                    />
                    <Typography variant={'h5'}>
                        {article.titre}
                    </Typography>
                    <Grid container>
                        {article.contenu.slice(0, 152)}...
                    </Grid>
                </Link>
            </Grid>
            ))}
        </Grid>
        <Grid container justify={'space-between'} style={{marginTop: 32}}>
            <Link to="/">
                <Button size={'small'}>
                    <Typography variant={'caption'}>
                        Retourner à l'accueil
                    </Typography>
                </Button>
            </Link>
            <Link to="/authors/">
                <Button size={'small'}>
                    <Typography variant={'caption'}>
                        Voir tous les auteurs
                    </Typography>
                </Button>
            </Link>
        </Grid>
        
    </Layout>
  )
  
export default UserTemplate

export const query = graphql`
  query UserTemplate($id: String!) {
    strapiUser(id: { eq: $id }) {
      id
      username
      email
      articles {
        id
        titre
        contenu
        image {
            childImageSharp {
                fixed(width: 600, height: 375) {
                    ...GatsbyImageSharpFixed
                }
            }
          }
      }
    }
  }
` 