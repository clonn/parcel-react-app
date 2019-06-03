import React from "react";
var createReactClass = require('create-react-class');
let TabsControl = createReactClass({
    getInitialState: function () {
        return { currentIndex: 0 }
    },
    getTitleItemCssClasses: function (index) {
        return index === this.state.currentIndex ? "tab-title-item active" : "tab-title-item";
    },

    getContentItemCssClasses: function (index) {
        return index === this.state.currentIndex ? "tab-content-item active" : "tab-content-item";
    },

    render: function () {
        let that = this;
        return (
            <div>
                <nav className="tab-title-items">
                    
                    {React.Children.map(this.props.children, (element, index) => {
                        return (<div onClick={() => { this.setState({ currentIndex: index }) }} className={that.getTitleItemCssClasses(index)}>{element.props.name}</div>)
                    })}
                </nav>
                <div className="tab-content-items">
                    {React.Children.map(this.props.children, (element, index) => {
                        return (<div className={that.getContentItemCssClasses(index)}>{element}</div>)
                    })}
                </div>
            </div>
        )
    }
});

let Tab = createReactClass({
    render: function () {
        return (
            <div>{this.props.children}</div>
        );
    }
});

module.exports = {
    TabsControl,
    Tab,

};