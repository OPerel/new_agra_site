import React from "react"
import { Link } from 'gatsby';
import './404.css';
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="nf-wrapper">
      <div className="nf-img-bg"><div className="nf-img"><p>404</p></div></div>
      <div className="not-found">
        <h1>אופס!</h1>
        <h4>העמוד שחיפשת לא קיים...</h4>
        <Link to="/">חזרה לעמוד הראשי</Link>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
