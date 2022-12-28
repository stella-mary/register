import React, { useState } from 'react';
import './Attendence.css'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { navigate, useNavigate } from 'react-router-dom';

const getDatafromValues = () => {
    const data = localStorage.getItem("Register");
    console.log(data)
    if (data) {
        return JSON.parse(data);
    } else {
        return [];
    }
};


export default function Attendence() {
    const [register, setRegister] = useState(getDatafromValues())
    const [clicked, setClicked] = useState("")
    const navigate = useNavigate()


    const updateAttendence = (id, value) => {
        // const data = JSON.parse(localStorage.getItem("inputs"));
        console.log("selected ID: " + id);
        const updatedArray = register.map((singleValue) => {
            console.log(id, singleValue.id);
            if (singleValue.id === id) {
                return {
                    id: singleValue.id,
                    name: singleValue.name,
                    mobile: singleValue.mobile,
                    email: singleValue.email,
                    city: singleValue.city,
                    collegeName: singleValue.collegeName,
                    attendence: value,
                };
            } else {
                return singleValue;
            }
        });
        console.log(updatedArray);
        setRegister(updatedArray);
        localStorage.setItem("Register", JSON.stringify(updatedArray));

    };



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

    const addNewItem = () => {
        navigate("/")
    }




    return (
        <div>
            <p className='navBar' onClick={addNewItem}><span class="underline">Register</span></p>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">Name</StyledTableCell>
                            <StyledTableCell align="center">Mobile Number</StyledTableCell>
                            <StyledTableCell align="center">Email</StyledTableCell>
                            <StyledTableCell align="center">City</StyledTableCell>
                            <StyledTableCell align="center">College Name</StyledTableCell>
                            <StyledTableCell align="center">Attendence</StyledTableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {register.map((row) => (
                            <StyledTableRow key={row}>
                                {/* <StyledTableCell align="center" component="th" scope="row">
                                {row.name}
                            </StyledTableCell> */}
                                <StyledTableCell align="center">{row.name}</StyledTableCell>
                                <StyledTableCell align="center">{row.mobile}</StyledTableCell>
                                <StyledTableCell align="center">{row.email}</StyledTableCell>
                                <StyledTableCell align="center">{row.city}</StyledTableCell>
                                <StyledTableCell align="center">{row.collegeName}</StyledTableCell>
                                <StyledTableCell align="center">{row.attendence === "joined" ? (<p>joined</p>) : (<button className='attend' value={clicked} onClick={() => updateAttendence(row.id, "joined")}>Present</button>)}</StyledTableCell>

                                {/* <StyledTableCell>
                                <div>
                                    {row.accepted === "Accepted" ? (
                                        <p>Accepted</p>
                                    ) : row.accepted === "Rejected" ? (
                                        <p>Rejected</p>
                                    ) : (
                                        <button
                                            style={{ color: "green", fontSize: "30px" }}
                                            // value={acceptedOrRejected}
                                            onClick={() => updateAcceptance(row.id, "Accepted")}
                                        />

                                    )}
                                </div>
                            </StyledTableCell> */}
                            </StyledTableRow>
                        ))}

                    </TableBody>
                </Table>
            </TableContainer >
        </div>
    );
}

