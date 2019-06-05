import React from "react";
import ReactDOM from "react-dom";
import Header from './components/Header';
import Content from './components/Content';
import api from './api/base';

class HelloMessage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
    }

    async componentDidMount() {
        const todos = await api.reloadTodoDatas();
        this.setState({
            todos
        });
    }

    render() {
        const { todos } = this.state;
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