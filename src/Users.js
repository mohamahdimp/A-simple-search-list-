import React from "react";
import AddIcon from "./AddIcon";
import NotAddIcon from "./NotAddIcon";

class Users extends React.Component {
  render() {
    return (
      <div className="people-nearby">
        <div className="nearby-user">
          <div className="row d-flex align-items-center">
            <div className="col-md-2 col-sm-2">
              <img
                src={this.props.img}
                alt="user"
                className="profile-photo-lg"
              />
            </div>
            <div className="col-md-7 col-sm-7">
              <h6 className=" mb-0">
                <a href="http://localhost:3000/" className="profile-link">
                  {this.props.name}
                </a>
              </h6>
              <p className="text-muted mb-0">{this.props.carier}</p>
              <p className="text-muted mb-0">{this.props.email}</p>
            </div>
            <div className="col-md-3 col-sm-3">
              <button
                onClick={() => this.props.toggleUser(this.props.item.id)}
                type="button"
                className={`badge badge-pill pull-right p-2 ${
                  this.props.item.isAded ? "badge-success" : "badge-primary"
                }`}
              >
                <span>
                  {this.props.item.isAded ? <NotAddIcon /> : <AddIcon />}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Users;
