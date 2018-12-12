'use strict';

const e = React.createElement;

class HelloWorld extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return "Hello World!"
  }
}

const domContainer = document.querySelector('#hello');
ReactDOM.render(e(HelloWorld), domContainer);

