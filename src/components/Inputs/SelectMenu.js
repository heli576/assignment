import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

const SelectMenu = ({label, value, list, handleChange}) => {
    return (
        <Grid item  md xs={12}>
        <FormControl variant="standard" color = "secondary" 
        sx = {{width:"80%", textAlign:"left"}}  >
        <InputLabel>{label}</InputLabel>
        <Select
          value={value}
          onChange={(e)=>handleChange(e.target.value)}
          label={label}
        >
            <MenuItem value="">
            <em>None</em>
          </MenuItem>
            {
            list&&list.map((l,i)=>(<MenuItem value={l}>{l}</MenuItem>))
        }
        </Select>
      </FormControl>
      </Grid>
    );
}

export default SelectMenu