import React from 'react'
import ParcelLogo from "../assets/images/parcel-logo.svg";

const Header = () => (
    <header>
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    <img width="120" src={ParcelLogo} alt=""/>
                </a>
            </div>
        </nav>
        <table className="nav nav-tabs">
            <td className="active"><a data-toggle="tab" href="#app">app</a></td>
            <td><a data-toggle="tab" href="#movie">movie</a></td>
        </table>
    </header>
)

export default Header