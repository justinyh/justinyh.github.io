import React from 'react';
import SeparatedRow from '../components/SeparatedRow'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Box, createTheme, ThemeProvider } from '@mui/material';

const SocialMediaBar = () => {
    const theme = createTheme({
        icons: {
            fontSize: {
                small: "1rem",
                medium: "2rem",
                large: "3rem",
            }
        }
    });
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{
                textAlign: "center",
                width: "50%",
                margin: "auto",
            }}>
                <SeparatedRow align="center">
                    <a href="https://linkedin.com/in/justinyh" target="_blank">
                        <LinkedInIcon sx={{ fontSize: theme.icons.fontSize.medium }} className="social-media" />
                    </a>
                    <a href="https://github.com/justinyh" target="_blank">
                        <GitHubIcon sx={{ fontSize: theme.icons.fontSize.medium }} className="social-media" />
                    </a>
                    <a href="https://facebook.com/justinhu88" target="_blank">
                        <FacebookIcon sx={{ fontSize: theme.icons.fontSize.medium }} className="social-media" />
                    </a>
                    <a href="https://instagram.com/justinhu88" target="_blank">
                        <InstagramIcon sx={{ fontSize: theme.icons.fontSize.medium }} className="social-media" id="ig"/>
                    </a>
                </SeparatedRow>
            </Box>
        </ThemeProvider>
    );
}

export default SocialMediaBar;