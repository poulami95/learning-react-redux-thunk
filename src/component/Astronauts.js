import React, { Component } from "react";
import { connect } from "react-redux";
import { loadUsers } from "../redux/actions";

class Astronauts extends Component{
 componentDidMount(){
     this.props.loadUsers()
 }
 render(){
    if (this.props.loading) {
        return <div>Loading</div>
    }
    
    if (this.props.error) {
        return <div style={{ color: 'red' }}>ERROR: {this.props.error}</div>
    }
    return(
        <table>
            <thead>
                <tr>
                    <th>Astronaut Name</th>
                    <th>SpaceCraft Name</th>
                </tr>
            </thead>
            {this.props.data.people !== undefined &&
            <tbody>
            {this.props.data.people.map((item,index)=>{
                return(
                    <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.craft}</td>
                 </tr>
                )
            })

            }
        </tbody>
        }
            
        </table>
        
    )
 }
}
const mapStateToProps = state =>{
    return ({
        data: state.reduxThunkReducer.data,
        loading: state.reduxThunkReducer.loading,
        error: state.reduxThunkReducer.error,
     });
}
 
 const mapDispatchToProps = {
    loadUsers
 };
 export default connect(
    mapStateToProps,
     mapDispatchToProps
     )(Astronauts);
