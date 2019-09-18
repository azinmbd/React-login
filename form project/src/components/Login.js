import React from 'react';
import { connect } from 'react-redux';
import {signInsubmit} from '../store/actions';



class Login extends React.Component{
    constructor(props){

        super(props);
        
        this.state = {
            emailValue: "",
            passwordValue: ""
        }
        
    }


    handleSubmit = event => {

        event.preventDefault();
        
        console.log(this.state.emailValue);
        this.props.signInsubmit({ username: this.state.emailValue,
                                  password:  this.state.passwordValue,
                                  history: this.props.history});


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
    
      clearErorr(event){
        document.getElementById("FormErorr").innerHTML = "" ;
      }

    render(){
        console.log(this.props.token)
        return(
            
            <div>
                <div className="d-flex justify-content-center mt-5">
                        <form className="col-7 d-flex flex-column list-group-item w-100" onSubmit={this.handleSubmit}>

                            <h1 className="mt-3">Login</h1>

                            <input
                                id="LoginEmail"
                                className="form-control mb-2 w-100"
                                placeholder="Username goes here..."
                                name="username"
                                type="email"
                                value={this.state.emailValue} 
                                onChange={this.emailChange}
                                required
                            />

                            <input
                                id="LoginPass"
                                className="form-control mb-2 w-100"
                                placeholder="Password goes here..."
                                name="password"
                                type="password"
                                value={this.state.passwordValue} 
                                onChange={this.passwordChange}
                                required
                            />

                            <input
                                onClick={this.clearErorr}
                                className="btn btn-primary mt-3 mb-3 w-100"
                                type="submit" value="Login"
                            />
                            <div id="FormErorr">

                            </div>

                        </form>
                </div>
                {/* <div>{this.props.token}</div> */}
            </div>
            
        )
    }
}


const mapStateToProps = ({LoginSuccsess}) =>({
   token: LoginSuccsess.token
})

// const mapDispatchToProps = (dispatch) => bindActionCreators( TodoActions , dispatch)


export default  connect(mapStateToProps, {
    signInsubmit
})(Login);
