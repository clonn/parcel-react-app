import React from "react"
import "../style/navBar.css"
import '../style/extra.css'

export default class NavBar extends React.PureComponent {

    setChoose (name) {
        this.props.setChoose(name)
    }

    render () {
        return (
            <div className = "flexBox">
                {this.props.pageList.map((name) => {
                    return (
                        <div className = "item" key = {name} onClick = {this.setChoose.bind(this, name)}>
                            <span>{name}</span>
                        </div>
                    )
                })}
            </div>
        )
    }
}