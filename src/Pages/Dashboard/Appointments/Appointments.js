import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
      [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
      },
      [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
      },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
      '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
      },
      // hide last border
      '&:last-child td, &:last-child th': {
            border: 0,
      },
}));

const Appointments = ({ date }) => {
      const { user, token } = useAuth();
      const [appointments, setAppointments] = useState([]);

      useEffect(() => {
            const url = `https://polar-woodland-79859.herokuapp.com/appointments?email=${user.email}&date=${date.toLocaleDateString()}`
            fetch(url, {
                  headers: {
                        'authorization': `Bearer ${token}`
                  }
            })
                  .then(res => res.json())
                  .then(data => setAppointments(data));
      }, [date, user.email, token])

      return (
            <div>
                  <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="Appointments table">
                              <TableHead>
                                    <TableRow>
                                          <StyledTableCell>Name</StyledTableCell>
                                          <StyledTableCell align="center">Time</StyledTableCell>
                                          <StyledTableCell align="center">Payment</StyledTableCell>
                                          <StyledTableCell align="center">Treatment</StyledTableCell>
                                          <StyledTableCell align="center">Action</StyledTableCell>
                                    </TableRow>
                              </TableHead>
                              <TableBody>
                                    {appointments.map((row) => (
                                          <StyledTableRow key={row._id}>
                                                <StyledTableCell component="th" scope="row">
                                                      {row.patientName}
                                                </StyledTableCell>

                                                <StyledTableCell align="center">{row.time}</StyledTableCell>
                                                <StyledTableCell align="center">{row.payment ? "paid":
                                                <Link style={{textDecoration:"none"}} to={`/dashboard/payment/${row._id}`}>
                                                <Button variant="contained">Pay</Button>
                                                </Link>
                                                }</StyledTableCell>
                                                <StyledTableCell align="center">{row.serviceName}</StyledTableCell>

                                                <StyledTableCell align="center"><Button variant="contained" style={{ backgroundColor: 'red' }}>Cancel</Button></StyledTableCell>
                                          </StyledTableRow>
                                    ))}
                              </TableBody>
                        </Table>
                  </TableContainer>
            </div>
      );
};

export default Appointments;