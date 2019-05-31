import React from "react";
import ReactDOM from "react-dom";
import Header from './components/Header';
import TodoList from './containers/TodoList';
import { BrowserRouter as Router, Route } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import api from './api/base';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  }

  async componentWillMount() {
    const data = await api.reloadTodoDatas();
    this.setState({
      todos: data
    })
  }

  render() {
    return (
      <div>
        <Router>
          <Header />
          <div className="container">
            <CssBaseline />
            <Container maxWidth="sm">
              <Route exact path="/" render={() => <TodoList {...this.state} />}/>
              {/* <Route path="/about" component={About} /> */}
            </Container>
          </div>
        </Router>

      </div>
    );
  }
}

const app = document.getElementById("app");
ReactDOM.render(<App />, app);