/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"
import "./layout.css"
import Box from "@mui/material/Box"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { colors } from "./constants";
import Section from "./Section";
import SocialMediaBar from "./SocialMediaBar";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)
  const theme = createTheme({
    fontFamily: 'Open Sans',
    typography: {
      h1: {
        fontFamily: 'Montserrat',
        fontWeight: '800',
        fontSize: '3rem',
      },
      h2: {
        fontFamily: 'Montserrat',
        fontWeight: '800',
        fontSize: '2.5rem',
      },
      h3: {
        fontFamily: 'Montserrat',
        fontWeight: '400',
        fontSize: '2rem',
      }
    },
    palette: {
      primary: {
        main: '#008800'
      }
    },
  });

  return (
    <>

      <Header menuLinks={data.site.siteMetadata.menuLinks} />
      <ThemeProvider theme={theme}>
        <main>{children}</main>
        <footer>
        <Section color={colors.NAVY} fontColor={colors.OPAL} padding="0.5rem">
          <SocialMediaBar />
          <Box textAlign="center">
            Justin Hu, © {new Date().getFullYear()}. 
          </Box>
        </Section>
        </footer>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
