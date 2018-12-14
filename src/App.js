import React, { Component } from 'react';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import data from './data.json';
//make a copy of original data, for purposes of desorting
//I could set an id for every person on data, but i preferred that way
var originalData = data.slice();
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

function sortByIndex(index, order) {
  data.sort(function(a,b) {
    if(a[index] > b[index]) return order;
    if(a[index] < b[index]) return -1 * order
  return 0;
  });
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      persons: data,
      order: [0,0,0,0,0,0]
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
                <TableCell onClick={() => {
                  if(this.state.order[0] === 0) {
                    sortByIndex('name', 1);
                    this.setState({persons: data, order: [1, 0, 0, 0, 0, 0]});
                  }
                  else if(this.state.order[0] === 1) {
                    sortByIndex('name', -1);
                    this.setState({persons: data, order: [-1, 0, 0, 0, 0, 0]});
                  }
                  else if(this.state.order[0] === -1) {
                    this.setState({persons: originalData, order: [0, 0, 0, 0, 0, 0]});
                  }
                }}><a href="#">Name {this.state.order[0]}</a></TableCell>
                <TableCell onClick={() => {
                  if(this.state.order[1] === 0) {
                    sortByIndex('address', 1);
                    this.setState({persons: data, order: [0, 1, 0, 0, 0, 0]});
                  }
                  else if(this.state.order[1] === 1) {
                    sortByIndex('address', -1);
                    this.setState({persons: data, order: [0, -1, 0, 0, 0, 0]});
                  }
                  else if(this.state.order[1] === -1) {
                    this.setState({persons: originalData, order: [0, 0, 0, 0, 0, 0]});
                  }
                }}>Address {this.state.order[1]}</TableCell>
                <TableCell onClick={() => {
                  if(this.state.order[2] === 0) {
                    sortByIndex('city', 1);
                    this.setState({persons: data, order: [0, 0, 1, 0, 0, 0]});
                  }
                  else if(this.state.order[2] === 1) {
                    sortByIndex('city', -1);
                    this.setState({persons: data, order: [0, 0, -1, 0, 0, 0]});
                  }
                  else if(this.state.order[2] === -1) {
                    this.setState({persons: originalData, order: [0, 0, 0, 0, 0, 0]});
                  }
                }}>City {this.state.order[2]}</TableCell>
                <TableCell onClick={() => {
                  if(this.state.order[3] === 0) {
                    sortByIndex('region', 1);
                    this.setState({persons: data, order: [0, 0, 0, 1, 0, 0]});
                  }
                  else if(this.state.order[3] === 1) {
                    sortByIndex('region', -1);
                    this.setState({persons: data, order: [0, 0, 0, -1, 0, 0]});
                  }
                  else if(this.state.order[3] === -1) {
                    this.setState({persons: originalData, order: [0, 0, 0, 0, 0, 0]});
                  }
                }}>Region {this.state.order[3]}</TableCell>
                <TableCell onClick={() => {
                  if(this.state.order[4] === 0) {
                    sortByIndex('country', 1);
                    this.setState({persons: data, order: [0, 0, 0, 0, 1, 0]});
                  }
                  else if(this.state.order[4] === 1) {
                    sortByIndex('country', -1);
                    this.setState({persons: data, order: [0, 0, 0, 0, -1, 0]});
                  }
                  else if(this.state.order[4] === -1) {
                    this.setState({persons: originalData, order: [0, 0, 0, 0, 0, 0]});
                  }
                }}>Country {this.state.order[4]}</TableCell>
                <TableCell onClick={() => {
                  if(this.state.order[5] === 0) {
                    sortByIndex('birthday', 1);
                    this.setState({persons: data, order: [0, 0, 0, 0, 0, 1]});
                  }
                  else if(this.state.order[5] === 1) {
                    sortByIndex('birthday', -1);
                    this.setState({persons: data, order: [0, 0, 0, 0, 0, -1]});
                  }
                  else if(this.state.order[5] === -1) {
                    this.setState({persons: originalData, order: [0, 0, 0, 0, 0, 0]});
                  }
                }}>Birthday {this.state.order[5]}</TableCell>
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
