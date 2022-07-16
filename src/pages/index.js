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
import ButtonGroup from "../components/ButtonGroup.js"
import { colors } from "../components/constants.js"

import Profile from "../images/Justin_Hu_Headshot.jpg"
import SeparatedRow from "../components/SeparatedRow"
import { StaticImage } from "gatsby-plugin-image"
import ExperienceBox from "../components/ExperienceBox"
import SocialMediaBar from "../components/SocialMediaBar"

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)"
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)"
  }
};


function IndexPage() {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setOpen(false);
  };

  return (
  <Layout>
    <SEO title="Home"/>
    <Section color={colors.BEIGE}>
      <Box
        sx={{
          padding: "2.5rem 0 0 0"
        }}
      >
        <SeparatedRow spacing={5} align="center">
          <StaticImage 
            className="left-trapezoid"  
            src="../images/Justin_Hu_Headshot.jpg"
          />
            <div>
              <Box sx={{
                textAlign: "left"
              }}>
                <Typography variant="h1">Justin Hu</Typography>
                <h2 className="subheading1">Full-Stack Software Engineer</h2>
              </Box>
              <p>
                Hey, I’m Justin! I’m a software engineer curious about the world around me. I create meaningful software to ethically and sustainably solve difficult problems.
              </p>
              <p>
                I’m originally from Des Moines, Iowa and the proud son of immigrant parents who taught me the value of dedication and dreaming big.
              </p>
              <ButtonGroup>
                <Button href="/Hu_Resume_09112020.pdf" target="_blank" variant="contained" color="primary">RESUME</Button>
                <Button href="mailto:justinhu88@yahoo.com" target="_blank" variant="outlined" color="primary">EMAIL</Button>
              </ButtonGroup>
            </div>
          </SeparatedRow>
        </Box>
    </Section>
    <Section color={colors.OPAL}>
      <Typography variant="h2" sx={{
        marginBottom: "2rem"
      }}>Experiences</Typography>
      <ExperienceBox 
        title="Relativity" 
        subtitle="Software Engineer, June 2021 - Present // Software Engineer Intern, Summer 2020">
          <p>
            I am currently a software engineer at Relativity, a technology company based out of Chicago, Illinois. 
            I help to produce and maintain the world's leading e-discovery platform. Specifically, I contribute to <a href="https://platform.relativity.com/RelativityOne/index.htm#Relativity_Forms/Relativity_Forms_API.htm" target="_blank">Relativity Forms</a>, 
            a product that allows user to build custom forms that can dynamically respond to user action through event handlers.
          </p>
      </ExperienceBox>
      <ExperienceBox 
        title="University of Southern California" 
        subtitle="Computer Science Major, Fall 2017 - Spring 2021">
          <p>
            I am currently a software engineer at Relativity, a technology company based out of Chicago, Illinois. 
            I help to produce and maintain the world's leading e-discovery platform. Specifically, I contribute to <a href="https://platform.relativity.com/RelativityOne/index.htm#Relativity_Forms/Relativity_Forms_API.htm" target="_blank">Relativity Forms</a>, 
            a product that allows user to build custom forms that can dynamically respond to user action through event handlers.
          </p>
      </ExperienceBox>
    </Section>
  </Layout>
  );
}

export default IndexPage
