import React from "react";
import ReactDOM from "react-dom";
import Header from './components/Header';
import Todo from './components/Todo';
import List from './components/List';
import api from './api/base';
import {TabsControl} from './components/TabsControl';
import {Tab}from './components/TabsControl';
import { exists } from "fs";
import "./css/TabsControl.css";

class HelloMessage extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			todos: [],
			omdblist: []
		};
		
	}

	
	async componentDidMount() {
		const todos = await api.reloadTodoDatas();
		const { Search: omdblist} = await api.reloadOmDbApi();
		
		this.setState({
			"todos": todos,
			"omdblist": omdblist,
		})
	}

	render() {
		
		const { todos } = this.state;
		const { omdblist } = this.state;
		return (
			<div>
				<h1> {this.props.name}</h1>
				<TabsControl baseWidth={400}>
					<Tab name="first">
						<div className="container">
							<ul>
								{
									todos.map((todo, index) => {
										return <Todo key={index} id={todo.id} title={todo.title} />
									})
								}
							</ul>
						</div>
					</Tab>
					<Tab name="second">
						<table>
							<tbody>
							{
								omdblist.map((list, index) => {
									return <List key={index} list={list} />
								})
							}
							</tbody>
						</table>
					</Tab>
				</TabsControl>
			</div>

		);
	}
}

const App = document.getElementById("app");
ReactDOM.render(<HelloMessage name="My youli" />, App);