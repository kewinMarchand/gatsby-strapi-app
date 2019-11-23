import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Articles = () => (
  <Layout>
    <SEO title="Articles" />
    <p>Welcome to articles</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Articles
