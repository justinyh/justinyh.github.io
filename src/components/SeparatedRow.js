import { Grid } from '@mui/material';
import React, { useState } from 'react';

function SeparatedRow ({ children, spacing, align }) {
    return (
    children && (
    <Grid 
        container 
        spacing={spacing} 
        sx={{
            alignItems: align,
        }}
    >
        {
        React.Children.map(children, child => {
             return (
                <Grid item md={child.props.columnSize || true}>{child}</Grid>
             );
        })}
    </Grid>)
    );
}

export default SeparatedRow;