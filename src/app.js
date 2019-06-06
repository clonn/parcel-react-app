import React from "react";
import ReactDOM from "react-dom";
import Header from './components/Header';
import Content from './components/Content';
import Product from './components/Product';
import api from './api/base';


class HelloMessage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            omdbs: []
        };
    }

    async componentDidMount() {
        const todos = await api.reloadTodoDatas();
        const omdbs = await api.reloadOmdb();
        this.setState({
            todos, omdbs
        });
    }

    render() {
        const { todos } = this.state;
        const { omdbs } = this.state;
        console.log({ todos });
        return (
            <div>
                <Header />
                <div className="container">
                    <h1>God of {this.props.name}</h1>
                </div>                                                                                                                                                                                      
                <Content todos={todos}/>
                <div>
                    
                </div>
            </div>
        );
    }
}

const App = document.getElementById("app");
ReactDOM.render(
<HelloMessage name="Kami" />, App
);