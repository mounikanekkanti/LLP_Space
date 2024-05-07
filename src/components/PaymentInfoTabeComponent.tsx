import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import TableSortLabel from '@mui/material/TableSortLabel';
import TablePagination from '@mui/material/TablePagination'; // Import TablePagination component

interface Row {
  paymentDate: string;
  reconciledDate: string;
  refId: string;
  paymentAmt: string;
  paymentType: string;
  paymentMethod: string;
  paymentStatus: string;
}

const columns = [
  { id: 'paymentDate', label: 'Payment Date', width: 150 },
  { id: 'reconciledDate', label: 'Reconciled Date', width: 150 },
  { id: 'refId', label: 'Reference Id', width: 150 },
  { id: 'paymentAmt', label: 'Payment Amt', width: 110 },
  { id: 'paymentType', label: 'Payment Type', width: 160 },
  { id: 'paymentMethod', label: 'Payment Method', width: 160 },
  { id: 'paymentStatus', label: 'Payment Status', width: 160 },
];

const rows: Row[] = [
  { paymentDate: '04/29/2024', reconciledDate: 'MM/DD/YYYY', refId: 'Ipsum', paymentAmt: '$1000', paymentType: 'Ipsum', paymentMethod: 'Ipsum', paymentStatus: 'Ipsum' },
  { paymentDate: '04/30/2024', reconciledDate: 'MM/DD/YYYY', refId: 'Ipsum', paymentAmt: '$500', paymentType: 'Ipsum', paymentMethod: 'Ipsum', paymentStatus: 'Ipsum' },
  { paymentDate: '05/01/2024', reconciledDate: 'MM/DD/YYYY', refId: 'Ipsum', paymentAmt: '$1500', paymentType: 'Ipsum', paymentMethod: 'Ipsum', paymentStatus: 'Ipsum' },
  { paymentDate: '05/02/2024', reconciledDate: 'MM/DD/YYYY', refId: 'Ipsum', paymentAmt: '$200', paymentType: 'Ipsum', paymentMethod: 'Ipsum', paymentStatus: 'Ipsum' },
  { paymentDate: '05/03/2024', reconciledDate: 'MM/DD/YYYY', refId: 'Ipsum', paymentAmt: '$1200', paymentType: 'Ipsum', paymentMethod: 'Ipsum', paymentStatus: 'Ipsum' },
  { paymentDate: '05/04/2024', reconciledDate: 'MM/DD/YYYY', refId: 'Ipsum', paymentAmt: '$1300', paymentType: 'Ipsum', paymentMethod: 'Ipsum', paymentStatus: 'Ipsum' },
  { paymentDate: '05/05/2024', reconciledDate: 'MM/DD/YYYY', refId: 'Ipsum', paymentAmt: '$1400', paymentType: 'Ipsum', paymentMethod: 'Ipsum', paymentStatus: 'Ipsum' },
];

export default function PaymentInfoTableComponent() {
  const [orderBy, setOrderBy] = useState<string>('');
  const [order, setOrder] = useState<'asc' | 'desc'>('asc');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selectAll, setSelectAll] = useState(false);
  const [selected, setSelected] = useState<{ [key: number]: boolean }>({});

  const handleRequestSort = (property: string) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSelected: { [key: number]: boolean } = {};
    if (event.target.checked) {
      rows.forEach((row, index) => {
        newSelected[index] = true;
      });
    }
    setSelected(newSelected);
    setSelectAll(event.target.checked);
  };

  const handleSelectOne = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newSelected = { ...selected };
    newSelected[index] = event.target.checked;
    setSelected(newSelected);
  };

  const sortedRows = [...rows].sort((a, b) => {
    const aValue = a[orderBy as keyof Row];
    const bValue = b[orderBy as keyof Row];
    if (order === 'asc') {
      if (aValue < bValue) return -1;
      if (aValue > bValue) return 1;
      return 0;
    } else {
      if (aValue > bValue) return -1;
      if (aValue < bValue) return 1;
      return 0;
    }
  });

  return (
    <Box sx={{ width: '100%' }}>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{width:'50px'}}>
                <Checkbox
                  checked={selectAll}
                  onChange={handleSelectAll}
                />
              </TableCell>
              {columns.map((column) => (
                <TableCell key={column.id} style={{ width: column.width }}>
                  <TableSortLabel
                    active={orderBy === column.id}
                    direction={orderBy === column.id ? order : undefined}
                    onClick={() => handleRequestSort(column.id)}
                  >
                    {column.label}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedRows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow key={row.refId}>
                  <TableCell style={{width:'50px'}}>
                    <Checkbox
                      checked={selected[index] || false}
                      onChange={(event) => handleSelectOne(event, index)}
                    />
                  </TableCell>
                  {columns.map((column) => (
                    <TableCell key={column.id} style={{ width: column.width }}>
                      {row[column.id as keyof Row]}
                    </TableCell> 
                  ))}
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </Box>
  );
}
