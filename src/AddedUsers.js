import React, { Component } from "react";

class AddedUsers extends Component {
  render() {
    let name = this.props.name;
    return (
      <div className="mr-2 d-flex flex-column align-items-center">
        <img src={this.props.img} alt="user" className="profile-photo-lg" />
        <span className="text-muted font-weight-lighter mb-2">
          {name.length < 6 ? name : name.substring(0, 6) + "..."}
        </span>
      </div>
    );
  }
}

export default AddedUsers;
