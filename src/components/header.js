import React, { Fragment, Component, createRef } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-dom';

class Header extends Component {
    constructor(props) {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <div className="header">
                <input type="text"/>
                <div>00</div>
            </div>
        )
    }
}
export default Header;
