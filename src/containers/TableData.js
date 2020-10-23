import React, { useState } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const columns = [
    {
        label: 'country',
        name: 'Country',
        align: 'left',
    },
    {
        label: 'todayCases',
        name: 'Today Cases',
        align: 'right',
    },
    {
        label: 'todayDeaths',
        name: 'Today Deaths',
        align: 'right',
    },
    {
        label: 'todayRecovered',
        name: 'Today Recovered',
        align: 'right',
    },
    {
        label: 'cases',
        name: 'Total Cases',
        align: 'right',
    },
    {
        label: 'active',
        name: 'Active',
        align: 'right',
    },
    {
        label: 'deaths',
        name: 'Deaths',
        align: 'right',
    },
    {
        label: 'recovered',
        name: 'Recovered',
        align: 'right',
    },
];

const useStyles = makeStyles({
    root: {
        margin: 'auto',
        maxHeight: 500, 
        width: '90%',
        maxWidth: 1000,
        marginTop: 50,
        marginBottom: 20,
        display: 'flex',
        flexDirection: 'column',
    },
    container: {
        height: '100%',
        justifyContent: 'space-evenly'
    },
    top: {
        display: 'flex',
        justifyContent: 'space-between',
    },
});



const TableData = ({countryInfo}) => {
    const classes = useStyles();
    const [filter, setFilter] = useState('');

    return (
        <Paper
            className={classes.root}
            elevation={15}
        >
            <Toolbar className={classes.top}>
                <Typography variant="h5">
                    Worldwide Data
                </Typography>
                <TextField label='Filter Countries' onChange={e => setFilter(e.target.value)}/>
            </Toolbar>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column, id) => (
                                <TableCell
                                    key={id}
                                    style={{ minWidth: column.minWidth }}
                                    align={column.align}
                                >
                                    {column.name}
                                </TableCell>
                            ))}
                            <TableCell />
                        </TableRow>
                    </TableHead>
                    <TableBody >
                        {countryInfo
                            .filter(row => filter.length? row.country.toLowerCase().includes(filter.toLowerCase()) : true)
                            .map((row, id) => {
                                return (
                                    <TableRow key={id}>
                                        {columns
                                            .map((column, id) => (                                                
                                                <TableCell 
                                                    key={id} 
                                                    align={column.align}
                                                >
                                                    {row[column.label].toLocaleString()}
                                                </TableCell>
                                            ))
                                        }
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}

const mapStateToProps = ({countryInfo}) => ({countryInfo});

export default connect(mapStateToProps)(TableData);
