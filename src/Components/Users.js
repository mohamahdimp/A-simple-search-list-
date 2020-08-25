import React from "react";
import { connect } from "react-redux";

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
                onClick={() => this.props.toggleUsers(this.props.item.id)}
                type="button"
                className={`badge badge-pill pull-right p-2 ${
                  this.props.item.isAded ? "badge-success" : "badge-primary"
                }`}
              >
                <span>
                  {this.props.item.isAded ? (
                    <div>
                      <i className="fas fa-check mr-2"></i>Added
                    </div>
                  ) : (
                    <div>
                      <i className="fas fa-user-plus mr-2"></i>Add
                    </div>
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    toggleUsers: (id) => dispatch({ type: "TOGGLE_USERS", payload: id }),
  };
};
const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
