import React from "react"
import { Link } from 'gatsby'

import Layout from '../components/Layout'

const indexPage = () => {
  return (
      <Layout>

        <h1>
          This is Ahmed Ali the front end developer
        </h1>
        <p>
          Need a developer? <Link to="/contact">Contact Me</Link>
        </p>

      </Layout>
    );

}

export default indexPage;