import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'

import { Button, Grid, Typography } from '@material-ui/core'

const IndexPage = ({ data }) => (
  <Layout>
    <Typography variant={'h1'}>
      Accueil
    </Typography>
    <Typography gutterBottom>
      Voici la liste de nos articles
    </Typography>
    <Grid container 
      component={'ul'} 
      spacing={4}
      justify={'flex-start'}
      style={{listStyle: 'none', marginTop: 32}}
    >
      {data.allStrapiArticle.edges.map(document => (
        <Grid item 
          component={'li'} 
          key={document.node.id}
        >
          <Link to={`/articles/${document.node.id}`}>
            <Img 
              fixed={document.node.image.childImageSharp.fixed}
              alt={document.node.titre}
              title={document.node.titre}
            />
            <Typography>
              {document.node.titre}
            </Typography>
          </Link>
        </Grid>
      ))}
    </Grid>
    <Grid container justify={'center'}>
      <Link to="/articles/">
        <Button size={'small'}>
          Voir tous les articles
        </Button>
      </Link>
    </Grid>
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