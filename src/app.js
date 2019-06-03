import React from "react";
import ReactDOM from "react-dom";
import Todo from './components/Todo';
import Product from './components/Product';

class HelloMessage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Product/>
                <Todo/>
            </div>
        );
    }
    
    
}

const App = document.getElementById("app");
ReactDOM.render(<HelloMessage/>, App);