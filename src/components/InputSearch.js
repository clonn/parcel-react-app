import React from "react"
import '../style/extra.css'
import "../style/input.css"

export default class InputSearch extends React.PureComponent {

    getKwd (event) {
        this.props.inputKwd(event.target.value)
    }

    render () {
        return (
                <div className = "verticalAbs inputDiv" >
                    <div className = "content horizonCenter">
                        <input placeholder = "Search..." type = "search" onChange = {this.getKwd.bind(this)} />
                    </div>
                </div>
            )
    }
}