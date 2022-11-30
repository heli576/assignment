import React from "react";
import { Grid, Typography, Button } from "@mui/material";

const FilterHeader = ({users, searchData, clearData}) => {
return (
<Grid container spacing={2}>
  <Grid item xs={6}>
    <Typography variant = "h6" style = {{textAlign:"left",fontWeight:800}}>Users ({users.length})</Typography>
  </Grid>
  <Grid item xs={6} style = {{textAlign: "right"}}>
      <Button
      onClick = {()=>searchData()}
      sx={{ my: 2, mr: 2}}
      color = "secondary"
      variant = "contained"
    >Search</Button>
    <Button
    onClick = {()=>clearData()}
    sx={{ my: 2}}
    color = "secondary"
    variant = "outlined"
    >Reset</Button>
  </Grid>
</Grid>
);
}

export default FilterHeader