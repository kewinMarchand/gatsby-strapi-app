/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Theme from '../Theme'
import Header from "./header"
import "./layout.css"

import { CssBaseline, Grid, ThemeProvider, Typography } from '@material-ui/core'

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title,
                    author
                }
            }
        }
    `)

    return (
        <Grid container
            direction={'column'}
            style={{minHeight: '100vh'}}
        >
            <ThemeProvider theme={Theme}>
                <CssBaseline/>
                <Header siteTitle={data.site.siteMetadata.title} />
                <main
                    style={{
                        flexGrow: 1,
                        margin: `0 auto`,
                        maxWidth: 960,
                        padding: `0px 1.0875rem 1.45rem`,
                        paddingTop: 0,
                    }}
                >
                    {children}
                </main>
                <Grid container
                    component={'footer'}
                    justify={'center'}
                    style={{
                        background: `rebeccapurple`,
                        padding: 32,
                        width: '100%'
                    }}
                >
                    <Typography
                        style={{color: '#FFF'}}
                    >
                        { new Date().getFullYear() },&nbsp;
                        { data.site.siteMetadata.author }
                    </Typography>
                </Grid>
            </ThemeProvider>
        </Grid>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
