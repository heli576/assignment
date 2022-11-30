import React from "react";
import { TableCell, TableHead, TableRow } from "@mui/material";

const TableHeader = () => {
    const fields = ["Name", "Status", "Gender","Credit Card Number", "Address"];
    return (
        <TableHead>
        <TableRow>
            {fields&&fields.map((f, i)=>(<TableCell key = {i} style = {{fontWeight: 800}}>{f}</TableCell>))}
          </TableRow>
        </TableHead>
    );
}

export default TableHeader