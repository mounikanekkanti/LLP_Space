import React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox'; // Import Checkbox component

const columns = [
  
  { id: 'paymentDate', label: 'Payment Date', width: 150 },
  { id: 'reconciledDate', label: 'Reconciled Date', width: 150 },
  { id: 'refId', label: 'Reference Id', width: 150 },
  { id: 'paymentAmt', label: 'Payment Amnt', width: 110 },
  { id: 'paymentType', label: 'Payment Type', width: 160 },
  { id: 'paymentMethod', label: 'Payment Method', width: 160 },
  { id: 'paymentStatus', label: 'Payment Status', width: 160 },
];

const rows = [
  { paymentDate: 'MM/DD/YYYY', reconciledDate: 'MM/DD/YYYY', refId: 'Ipsum', paymentAmt: '$1000', paymentType:'Ipsum', paymentMethod:'Ipsum', paymentStatus:'Ipsum'},
  { paymentDate: 'MM/DD/YYYY', reconciledDate: 'MM/DD/YYYY', refId: 'Ipsum', paymentAmt: '$1000', paymentType:'Ipsum', paymentMethod:'Ipsum', paymentStatus:'Ipsum'},
  { paymentDate: 'MM/DD/YYYY', reconciledDate: 'MM/DD/YYYY', refId: 'Ipsum', paymentAmt: '$1000', paymentType:'Ipsum', paymentMethod:'Ipsum', paymentStatus:'Ipsum'},
  { paymentDate: 'MM/DD/YYYY', reconciledDate: 'MM/DD/YYYY', refId: 'Ipsum', paymentAmt: '$1000', paymentType:'Ipsum', paymentMethod:'Ipsum', paymentStatus:'Ipsum'},
  { paymentDate: 'MM/DD/YYYY', reconciledDate: 'MM/DD/YYYY', refId: 'Ipsum', paymentAmt: '$1000', paymentType:'Ipsum', paymentMethod:'Ipsum', paymentStatus:'Ipsum'},
];

export default function PaymentInfoTabeComponent() {
  return (
    <Box sx={{ width: '100%' }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
              <Checkbox />
              </TableCell>
              {columns.map((column) => (
                <TableCell key={column.id} style={{ width: column.width }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow>
                <TableCell>
                  <Checkbox />
                </TableCell>
                {columns.map((column) => (
                  <TableCell key={column.id} style={{ width: column.width }}>
                    {row[column.id as keyof typeof row]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
