import React from 'react';
import {sigupSubmit} from '../function/function';



class SignUp extends React.Component{

    constructor(props){
        super(props);
        
        this.state = {
            emailValue: "",
            passwordValue: ""
        }

    }

    handleSubmit = (event) => {

        event.preventDefault();

        sigupSubmit({username: this.state.emailValue, password: this.state.passwordValue, });

    }

    emailChange = (event) => {
        this.setState({
          emailValue: event.target.value,
        });
      }

    passwordChange = (event) => {
        this.setState({
          passwordValue: event.target.value,
        });
      }
    



    render(){
        return(

            <div>
                <div className="d-flex justify-content-center mt-5">
                        <form className="col-7 d-flex flex-column list-group-item w-100" onSubmit={this.handleSubmit}>

                            <h1 className="mt-3">SignUp</h1>

                            <input
                                className="form-control mb-2 w-100"
                                placeholder="Username goes here..."
                                name="username"
                                type="text"
                                value={this.state.emailValue} 
                                onChange={this.emailChange}
                                required
                            />

                            <input
                                className="form-control mb-2 w-100"
                                placeholder="Password goes here..."
                                name="password"
                                type="password"
                                value={this.state.passwordValue} 
                                onChange={this.passwordChange}
                                required
                            />

                            <input
                                className="btn btn-primary mt-3 mb-3 w-100"
                                type="submit" value="SignUp"
                            />

                        </form>
                </div>
                
            </div>

        )
    }
}



export default SignUp;
