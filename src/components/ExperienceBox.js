import React from "react";
import { Button, Typography, Box } from "@mui/material";
import ExperienceIcon from "./ExperienceIcon";
import SeparatedRow from "./SeparatedRow";
import { StaticImage } from "gatsby-plugin-image";

function ExperienceBox({children, title, subtitle}) {
    return (
        <Box sx={{
            margin: "2rem 0"
        }}>
            <SeparatedRow spacing={3} align="top">
                <Box columnSize={2} sx={{
                    textAlign: "center",
                    padding: "0 1rem",
                }}>
                    <ExperienceIcon></ExperienceIcon>
                </Box>
                <div>
                    <Box>
                        <Typography variant="h3">{title}</Typography>
                        <Box sx={{
                            marginBottom: "1rem",
                            fontStyle: "italic",
                        }}>
                            {subtitle}
                        </Box>
                            {children}
                    </Box>
                </div>
            </SeparatedRow>
        </Box>
    );
}

export default ExperienceBox;

