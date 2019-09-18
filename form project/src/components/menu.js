import React from 'react';
import {BrowserRouter as Router, Route ,Link} from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';



class Menu extends React.Component{

    render(){
        return(
            <Router>
                <div>
                        <nav className="nav navbar navbar-expand-sm bg-dark navbar-dark sticky-top  justify-content-center " >
                            <ul className="nav navbar-nav col-7 d-flex justify-content-around">
                                <li><Link to="/" className="nav-link">Home</Link></li>
                                <li><Link to="/Login" className="nav-link">Login</Link></li>
                                <li><Link to="/SignUp" className="nav-link">SignUp</Link></li>
                            </ul>
                        </nav>

                        <Route exact path="/" component={Home} />
                        <Route path="/Login" component={Login} />
                        <Route path="/SignUp" component={SignUp} />
                </div>
          </Router>
        )
    }
}


export default Menu;
