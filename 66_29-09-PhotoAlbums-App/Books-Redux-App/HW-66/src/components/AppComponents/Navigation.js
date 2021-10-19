import { NavLink} from 'react-router-dom'

const Navigation = () => {
    
    return (
        <nav className="navbar navbar-expand bg-danger p-3">
            <div className="container">
                <ul className="navbar-nav mb-2 mb-lg-0 ">
                    <li className="nav-item me-5 ">
                        <NavLink exact to="/">
                            HOME
                        </NavLink>
                    </li>
                    <li className="nav-item me-5">
                        <NavLink to="/books">
                            BOOKS
                        </NavLink>
                    </li>
                    <li className="nav-item me-5">
                        <NavLink to="/add_book">
                            ADD BOOK
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation;