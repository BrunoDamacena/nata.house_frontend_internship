import React, { Component } from 'react';

class ShowArrow extends Component {
    render() {
        const rValue = () => {
            if (this.props.order === 1) {
                return '↓';
            }
            else if (this.props.order === -1){
                return '↑';
            }
            else {
                return '';
            }
        }
        return (
            <i>{rValue()}</i>
        );
    }
}

export default ShowArrow;