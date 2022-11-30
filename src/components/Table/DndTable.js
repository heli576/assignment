import React, { useState } from "react";
import { Table, TableContainer, Paper} from "@mui/material";
import TableHeader from "./TableHeader";
import TableMain from "./TableMain";
import Tablefooter from "./Tablefooter";

const DndTable = ({users, rowsPerPage, setRowsPerPage}) => {
    const [page, setPage] = useState(0);

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