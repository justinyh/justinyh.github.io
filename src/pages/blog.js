import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Section from "../components/Section"
import SEO from "../components/Seo"
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Dialog from "@mui/material/Dialog"
import DialogTitle from "@mui/material/DialogTitle"
import DialogContent from "@mui/material/DialogContent"
import DialogActions from "@mui/material/DialogActions"
import Typography from "@mui/material/Typography"
import Header from "../components/Header"

import Profile from "../images/Justin_Hu_Headshot.jpg"

const SecondPage = () => (
    <Layout>
      <SEO title="Blog" />
      <h1>Hi from the blog</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
  
  export default SecondPage