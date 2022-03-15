/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import {
  Table as MuiTable, makeStyles, TablePagination
} from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(() => ({
  root: () => ({
    color: '#ddd'
  }),
  tableContainer: (data) => ({
    maxHeight: data.fixedHeader ? '350px' : 'auto'
  }),
  header: (data) => ({
    backgroundColor: data.headerBackground,
    color: data.headerCellColor
  }),
  row: (data) => ({
    ':hover': {
      backgroundColor: data.rowHighlightColor
    },
    '&:nth-of-type(odd)': {
      backgroundColor: data.evenCellBackground
    }
  })
}));

export default function TableComponent({ data }) {
  const classes = useStyles(data);

  const pages = [5, 10, 15];
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(pages[page]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const recordsAfterPagingAndSorting = () => data.tableRows.slice(page * rowsPerPage, (page + 1) * rowsPerPage);

  return (
    <>
      <TableContainer className={classes.tableContainer} component={Paper}>
        <MuiTable
          stickyHeader={data.fixedHeader}
          aria-label={data.description}
          className={classes.root}
        >
          <TableHead>
            <TableRow>
              {data?.tableHeader?.map((cell, index) => (
                <TableCell key={index} className={classes.header}>
                  {cell}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.tableWithPagination && recordsAfterPagingAndSorting().map((row) => (
              <TableRow hover key={row.id} scope="row" className={classes.row}>
                {row.cellValues.map((cell) => <TableCell>{cell}</TableCell>)}
              </TableRow>
            ))}
            {!data.tableWithPagination && data?.tableRows.map((row) => (
              <TableRow hover key={row.id} scope="row" className={classes.row}>
                {row.cellValues.map((cell) => <TableCell>{cell}</TableCell>)}
              </TableRow>
            ))}
          </TableBody>
          {data.tableWithPagination && (
          <TablePagination
            rowsPerPageOptions={[...pages, { label: 'All', value: -1 }]}
            colSpan={3}
            count={data.tableRows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            SelectProps={{
              inputProps: { 'aria-label': 'rows per page' },
              native: true
            }}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
          )}
        </MuiTable>
      </TableContainer>
    </>
  );
}
