import React from "react";
import { TableFooter, TablePagination, TableRow } from "@mui/material";
import TablePaginationActions from "@mui/material/TablePagination/TablePaginationActions";

const Tablefooter = ({rows, page, rowsPerPage, setPage, setRowsPerPage}) => {
 
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const optionsList = () => {
    var list = []
    list.push({label:'All',value:-1});
    for(var i = 1;i<=100;i++) list.push({label:i,value:i});
    return list;
  }
    return (
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={optionsList()}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
    );
}

export default Tablefooter