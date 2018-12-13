import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import data from './data.json';
const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>nata.house frontend internship</h1>
        <Paper >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>City</TableCell>
                <TableCell>Region</TableCell>
                <TableCell>Country</TableCell>
                <TableCell>Birthday</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                data.map(person => {
                  return (
                    <TableRow>
                      <TableCell>{person.name}</TableCell>
                      <TableCell>{person.address}</TableCell>
                      <TableCell>{person.city}</TableCell>
                      <TableCell>{person.region}</TableCell>
                      <TableCell>{person.country}</TableCell>
                      <TableCell>{person.birthday}</TableCell>
                    </TableRow>
                  );
                })
              }
            </TableBody>
          </Table>
        </Paper>
        
      </div>
    );
  }
}
export default withStyles(styles)(App);
