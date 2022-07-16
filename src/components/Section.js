import React from "react"
import PropTypes from "prop-types"
import "../styles/section.css"
import { Box } from "@mui/material";

const Section = ({ children, color, fontColor, padding }) => {
    console.log("color is ", color);
    const sectionClasses = `h-screen `
  return (
    <>
      <Box sx= {{
        backgroundColor: color,
        color: fontColor,
        padding: padding || "4rem"
      }}>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1080,
        }}
      >
          {children}
          </div>
      </Box>
    </>
  )
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Section