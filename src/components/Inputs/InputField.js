import { Grid, TextField } from "@mui/material";
import React from "react";

const InputField = ({label, value, type, handleChange}) => {
    return(
        <Grid item  md xs={12}>
                <TextField
                color = "secondary" 
                sx = {{width:"80%", textAlign:"left"}} 
                label= {label} 
                variant="standard"
                type = {type}
                value = {value}
                onChange = {(e)=> handleChange(e.target.value)}
                 />
            </Grid>
    );
}

export default InputField