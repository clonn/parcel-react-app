import React from "react";



const TabsControl = (props) => {
    var currentIndex = 0;
    const setClass = (index, name) => {

        var elems = document.querySelectorAll(".tab-title-item");
        elems.forEach(function (e) {
            e.classList.remove("active");
            if (e.id === name) {
                e.classList.add("active");
            }
        })
        var elems = document.querySelectorAll(".tab-content-item");
        elems.forEach(function (e) {
            e.classList.remove("active");
            if (e.id === name) {
                e.classList.add("active");
            }
        })


    }
    const getTitleItemCssClasses = (index) => {
        return index === currentIndex ? "tab-title-item active" : "tab-title-item";
    }
    const getContentItemCssClasses = (index) => {
        return index === currentIndex ? "tab-content-item active" : "tab-content-item";
    }
    return (
        <div>
            <nav className="tab-title-items">

                {React.Children.map(props.children, (element, index) => {
                    return (
                        <div onClick={() => setClass(index, element.props.name)} id={element.props.name} key={element.props.name} className={getTitleItemCssClasses(index)}>
                            {element.props.name}
                        </div>
                    )
                })}
            </nav>
            <div className="tab-content-items">
                {React.Children.map(props.children, (element, index) => {
                    return (<div data={element.props.name} id={element.props.name} className={getContentItemCssClasses(index)}>{element}</div>)
                })}
            </div>
        </div>
    )
}


const Tab = (props) => {
    return (
        <div>{props.children}</div>
    );
};
module.exports = {
    TabsControl,
    Tab,
};