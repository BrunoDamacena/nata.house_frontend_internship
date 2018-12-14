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
console.log(data);
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

var actualIndex = '';

function compare(a, b) {
  if(a[actualIndex] > b[actualIndex]) return 1;
  if(a[actualIndex] < b[actualIndex]) return -1;
  return 0;
}

function sortByIndex(index, order) {
  actualIndex = index;
  data.sort(function(a,b) {
    if(a[actualIndex] > b[actualIndex]) return order;
    if(a[actualIndex] < b[actualIndex]) return -1 * order
  return 0;
  });
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      persons: data,
      order: 1
    }
  }

  render() {
    return (
      <div className="App">
        <h1>nata.house frontend internship</h1>
        <Paper >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell onClick={() => {sortByIndex('name', this.state.order); this.setState({persons: data, order: -1 * this.state.order})}}>Name</TableCell>
                <TableCell onClick={() => {sortByIndex('address', this.state.order); this.setState({persons: data, order: -1 * this.state.order})}}>Address</TableCell>
                <TableCell onClick={() => {sortByIndex('city', this.state.order); this.setState({persons: data, order: -1 * this.state.order})}}>City</TableCell>
                <TableCell onClick={() => {sortByIndex('region', this.state.order); this.setState({persons: data, order: -1 * this.state.order})}}>Region</TableCell>
                <TableCell onClick={() => {sortByIndex('country', this.state.order); this.setState({persons: data, order: -1 * this.state.order})}}>Country</TableCell>
                <TableCell onClick={() => {sortByIndex('birthday', this.state.order); this.setState({persons: data, order: -1 * this.state.order})}}>Birthday</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                this.state.persons.map(person => {
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
