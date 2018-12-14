import React, { Component } from 'react';
import './App.css';
import ShowArrow from './ShowArrow.js';
import data from './data.json';

function sortByIndex(index, order) {
  data.sort(function (a, b) {
    if (a[index] > b[index]) return order;
    if (a[index] < b[index]) return -1 * order
    return 0;
  });
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      persons: data,
      order: [0, 0, 0, 0, 0, 0]
    }
    this.onClickEvent = this.onClickEvent.bind(this);
  }

  onClickEvent = (index, actualIndexState) => {
    var newOrder;
    if (actualIndexState === 0 || actualIndexState === -1) {
      sortByIndex(index, 1);
      newOrder = this.updateOrder(index, 1);
      this.setState({ persons: data, order: newOrder });
    }
    else if (actualIndexState === 1) {
      sortByIndex(index, -1);
      newOrder = this.updateOrder(index, -1);
      this.setState({ persons: data, order: newOrder });
    }
  }

  updateOrder = (index, value) => {
    if (index === 'name') return [value, 0, 0, 0, 0, 0];
    if (index === 'address') return [0, value, 0, 0, 0, 0];
    if (index === 'city') return [0, 0, value, 0, 0, 0];
    if (index === 'region') return [0, 0, 0, value, 0, 0];
    if (index === 'country') return [0, 0, 0, 0, value, 0];
    if (index === 'birthday') return [0, 0, 0, 0, 0, value];
  }

  render() {
    return (
      <div className="App">
        <h1>nata.house frontend internship</h1>
        <table>
          <thead>
            <tr>
              <th onClick={() => this.onClickEvent('name', this.state.order[0])}>Name <ShowArrow order={this.state.order[0]}></ShowArrow></th>
              <th onClick={() => this.onClickEvent('address', this.state.order[1])}>Address <ShowArrow order={this.state.order[1]}></ShowArrow></th>
              <th onClick={() => this.onClickEvent('city', this.state.order[2])}>City <ShowArrow order={this.state.order[2]}></ShowArrow></th>
              <th onClick={() => this.onClickEvent('region', this.state.order[3])}>Region <ShowArrow order={this.state.order[3]}></ShowArrow></th>
              <th onClick={() => this.onClickEvent('country', this.state.order[4])}>Country <ShowArrow order={this.state.order[4]}></ShowArrow></th>
              <th onClick={() => this.onClickEvent('birthday', this.state.order[5])}>Birthday <ShowArrow order={this.state.order[5]}></ShowArrow></th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.persons.map((person, i) => {
                return (
                  <tr key={i}>
                    <td>{person.name}</td>
                    <td>{person.address}</td>
                    <td>{person.city}</td>
                    <td>{person.region}</td>
                    <td>{person.country}</td>
                    <td>{person.birthday}</td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
        <footer>Made with ♥ by <a href="https://brunodamacena.github.io/" target="_blank" rel="noopener noreferrer">Bruno Damacena</a></footer>
      </div>
    );
  }
}
export default App;