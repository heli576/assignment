import React, { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import DndTable from "./Table/DndTable";
import axios from "axios";
import Filters from "./Filters/Filters";
import { CircularProgress } from "@mui/material";

const ContainerGrid = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const [filters, setFilters] = useState({
    name:"",
    city:"",
    count: 5,
    status:"",
    gender:""
  });

  // fetch users
  const fetchUsers = async() => {
    setLoading(true);
    try{
        let resp = await axios.get(`https://random-data-api.com/api/users/random_user?size=100`);
        setUsers(resp.data);
        setFilteredUsers(resp.data);
        setLoading(false);
    }catch(e){
      setLoading(false);
        console.log(e)
    }
}

const filterUsers = (data) => {
  let { name, gender, city, status } = data;
  try{
    let res = filteredUsers;
   if(name){
    let searchArray = name.trim().split(" ");
    let re = new RegExp(searchArray.join("|"), "i");
   res = res.filter((u)=>re.test(u.first_name+" "+u.last_name));
   }
   if(gender) res = res.filter((u)=>gender===u.gender);
   if(city) res = res.filter((u)=>city===u.address.state);
   if(status) res = res.filter((u)=>status===u.subscription.status);
   setFilteredUsers(res);
  }catch(e){
    console.log(e)
  }
}

const clearSearch = () => {
  try{
    setFilteredUsers(users);
  }catch(e){
    console.log(e)
  }
}

useEffect(()=>{
  fetchUsers();
}, []);

return(<Grid container spacing={2}>
  <Grid item xs={1}>
  </Grid>
  <Grid item xs={10} mt = {4}>
    <Filters 
    users = {filteredUsers}
    filters = {filters}
    setFilters = {setFilters}
    filterUsers = {filterUsers}
    clearSearch = {clearSearch}
    />
    {loading?(<CircularProgress color="secondary" />):(<DndTable users = {filteredUsers} 
    rowsPerPage = {filters.count} 
    setRowsPerPage = {(data)=> setFilters({...filters, count: data})}
    />)}
  </Grid>
  <Grid item xs={1}>
  </Grid>
</Grid>);
}

export default ContainerGrid;