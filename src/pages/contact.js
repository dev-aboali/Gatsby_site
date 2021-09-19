import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/Layout";
const contact = () => {
  return (
      <Layout>
          <h1>Contact us</h1>
          <p>Email: dev.ahmed93@gmail.com </p>
          <p>Phone: 01027666358</p>
          <Link to="/">Back</Link>
      </Layout>
    );

}

export default contact;