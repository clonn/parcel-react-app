import React from 'react'

const Header = () => (
    <header>
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className = "list" href = "#todo">TodoList</a>
                <a className = "list" href = "#movie">MoveList</a>
            </div>
        </nav>
    </header>
)

export default Header