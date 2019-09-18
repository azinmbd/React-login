import React from 'react';
import { connect } from 'react-redux';
import {getAccountsBuilding} from '../store/actions';


class Home extends React.Component{
    componentDidMount(){
        this.props.getAccountsBuilding(this.props.token)
    }

 

    render(){
        return(
            <div>
                <div className="list">

                </div>
            </div>
        )
    }
}



 
const mapStateToProps = ({LoginSuccsess}) =>{
    return {token: LoginSuccsess.token}
 }

export default connect(mapStateToProps, {
    getAccountsBuilding
})(Home);
