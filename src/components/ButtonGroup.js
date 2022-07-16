import React from "react"
import Button from "@mui/material"

const ButtonGroup = ({children}) => {
    const classes = `grid grid-cols-${React.Children.count(children)} gap-x-10`;
    return (
        <div className={classes}>
            {children}
        </div>
    )
};

export default ButtonGroup;