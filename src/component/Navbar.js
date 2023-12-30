import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


// => Here props are used to import things now you can see thAt.... in the title itself we hve imported {prop.title}.......
export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            {/* // here i did cover it in { } and `` such that we can use js notations in it */}
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" to="/">{props.links}</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/aboutUS">About</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" to="/">Action</a></li>
                                <li><a className="dropdown-item" to="/">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" to="/">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>

                    {/* Now here let's make some buttons instead of the switches */}
                    <div className="d-flex">
                        <div className="bg-primary rounded mx-2" onClick={() => { props.toggle('primary') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
                        <div className="bg-danger rounded mx-2" onClick={() => { props.toggle('danger') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
                        <div className="bg-success rounded mx-2" onClick={() => { props.toggle('primary') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
                        <div className="bg-warning rounded mx-2" onClick={() => { props.toggle('warning') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
                    </div>
                    {/* <div className={`form-check form-switch text-${props.mode === 'light' ? 'blue' : 'light'}`}>
                        <input className="form-check-input" onClick={props.blueMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label mx-1" htmlFor="flexSwitchCheckDefault">Blue Mode</label>
                    </div>
                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'green' : 'light'}`}>
                        <input className="form-check-input" onClick={props.greenMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label mx-1" htmlFor="flexSwitchCheckDefault">Green Mode</label>
                    </div>
                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'red' : 'light'}`}>
                        <input className="form-check-input" onClick={props.redMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label mx-1" htmlFor="flexSwitchCheckDefault">Red Mode</label>
                    </div>
                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                        <input className="form-check-input" onClick={props.toggle(null)} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label mx-1" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                    </div> */}
                </div>
            </div>
        </nav>
    )
}


// these are here such that no incorrect datatypes are send to the prop values from the App.js.....
Navbar.propTypes = {
    title: PropTypes.string.isRequired, // here is required means that it needs title even if it is default but there has to be a title
    links: PropTypes.string.isRequired // put it into all......
};

// Now here in case if i am not able to set default props then i need to give it some default values like i am not able to set title and links in App.js and in the Navbar tag espicially then 
Navbar.defaultProps = {
    title: 'You Forgot Title',
    links: 'Link Also'
};