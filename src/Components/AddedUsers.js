import React, { Component } from "react";
import { connect } from "react-redux";

class AddedUsers extends Component {
  render() {
    let name = this.props.name;
    return (
      <div className="mr-2 d-flex flex-column align-items-center bg-white mb-2">
        <img src={this.props.img} alt="user" className="profile-photo-lg" />
        <span className="text-muted font-weight-lighter mb-2">
          <button
            onClick={() => this.props.toggleUsers(this.props.item.id)}
            className="badge badge-pill badge-danger"
          >
            -
          </button>
          {name.length < 5 ? name : name.substring(0, 5) + "..."}
        </span>
      </div>
    );
  }
  
}
const mapDispatchToProps = (dispatch)=>{
  return {toggleUsers : (id)=>dispatch({type:"TOGGLE_USERS",payload:id})};
}
const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(AddedUsers);
