import React from "react";
import Grid from '@mui/material/Grid';
import DndTable from "./DndTable";

const ContainerGrid = () => {
return(<Grid container spacing={2}>
  <Grid item xs={1}>
  </Grid>
  <Grid item xs={10} mt = {4}>
    <DndTable/>
  </Grid>
  <Grid item xs={1}>
  </Grid>
</Grid>);
}

export default ContainerGrid;