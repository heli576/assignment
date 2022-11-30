import React, { useEffect, useState } from "react";
import { Table, TableContainer, Paper, Button, Pagination } from "@mui/material";
import axios from "axios";
import TableHeader from "./TableHeader";
import TableMain from "./TableMain";
import Tablefooter from "./Tablefooter";

const DndTable = () => {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

     // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - users.length) : 0;

    // fetch users
    const fetchUsers = async() => {
        try{
            let resp = await axios.get(`https://random-data-api.com/api/users/random_user?size=15`);
            setUsers(resp.data);
        }catch(e){
            console.log(e)
        }
    }

    useEffect(()=>{
      fetchUsers();
    }, []);

    return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }}>
        <TableHeader/>
        <TableMain 
        users = {users} 
        page = {page} 
        rowsPerPage = {rowsPerPage}
        />
        <Tablefooter 
        rows = {users} 
        page = {page} 
        setPage = {setPage} 
        rowsPerPage = {rowsPerPage} 
        setRowsPerPage = {setRowsPerPage}/>
        </Table>
        </TableContainer>
    )
}

export default DndTable