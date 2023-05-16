import "./table.scss";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { v4 as uuid } from 'uuid';
import React, { useEffect, useState } from 'react';


function RndKey() {
    const unique_id = uuid();
    const small_id = unique_id.slice(0,8)
  }


  
const tablelist = () => {

    const sampleData=[{"_name":"Omercan Kuyumcu","_email":"test@evonet.com.tr","_age":30,"_city":"Istanbul"},{"_name":"John Doe","_email":"johndoe@example.com","_age":25,"_city":"New York"},{"_name":"Jane Smith","_email":"janesmith@example.com","_age":35,"_city":"London"}]
    const unique_id = uuid();
    const small_id = unique_id.slice(0,8)
    
   
      
  return (
    <TableContainer component={Paper} className="table">
    <Table sx={{ minWidth: 650 }} aria-label="Sample Data from Evonet">
      <TableHead>
        <TableRow>
          <TableCell className="tableCell">_id</TableCell>
          <TableCell className="tableCell">_name </TableCell>
          <TableCell className="tableCell">_email</TableCell>
          <TableCell className="tableCell">_age</TableCell>
          <TableCell className="tableCell">_city&nbsp;(Turkiye)</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {sampleData.map((row) => (
          <TableRow
            key={row.id}
          >
            <TableCell className="tableCell">{small_id}</TableCell>
            <TableCell className="tableCell">{row._name}</TableCell>
            <TableCell className="tableCell">{row._email}</TableCell>
            <TableCell className="tableCell">{row._age}</TableCell>
            <TableCell className="tableCell">{row._city}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default tablelist

