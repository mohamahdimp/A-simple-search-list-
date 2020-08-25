import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { connect } from "react-redux";
//import Components
import Users from "./Users";
import AddedUsers from "./AddedUsers";

//import reducers

class App extends React.Component {
  // handleCreate(e) {
  //   e.preventDefault();

  //   let { employees } = this.state;
  //   let item = employees.filter((item) => item.isAded === true);
  //   this.setState({
  //     groupMembers: item,
  //     groupName: e.target.value,
  //   });
  //   console.log(this.state);
  // }
  // handleDiscard(e) {
  //   e.preventDefault();
  //   let { employees } = this.state;
  //   employees.map((x) => (x.isAded = false));
  //   this.setState({
  //     ...employees,
  //     inputValue: "",
  //   });
  // }
  // toggleUsers(id) {
  //   let { employees } = this.state;
  //   let item = employees.find((item) => item.id === id);
  //   item.isAded = !item.isAded;
  //   console.log(this.state);
  //   this.setState({
  //     employees,
  //   });
  // }

  // usersFilterOnChange(event) {
  //   this.setState({ inputValue: event.target.value });
  // }
  // componentDidUpdate(prevProps) {
  //   // Typical usage (don't forget to compare props):
  //   if (this.props.employees !== prevProps.employees) {
  //     this.fetchData(this.props.userID);

  //   }
  // }

  render() {
    let { employees } = this.props;
    let AddedEmp = employees.filter((item) => item.isAded === true);
    console.log(employees);
    let searchedUsers = employees.filter((item) => {
      return item.name
        .toLowerCase()
        .includes(this.props.inputValue.toLowerCase());
    });

    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12 m-auto temp-width">
            <form>
              <fieldset>
                <legend>Group title: </legend>
                <input
                  className="form-control form-control-lg mb-3"
                  type="text"
                  placeholder="Design team"
                  value={this.props.groupName}
                  onChange={this.props.handleCreate}
                />
              </fieldset>

              <div className=" d-flex flex-row">
                {AddedEmp.length < 1 ? (
                  <div className="alert alert-secondary text-center text-muted w-100">
                    selected members will display here
                  </div>
                ) : (
                  AddedEmp.map((item) => (
                    <AddedUsers
                      item={item}
                      key={item.id}
                      img={item.img}
                      name={item.name}
                      // toggleUser={this.toggleUsers.bind(this)}
                    />
                  ))
                )}
              </div>
              <input
                className="form-control mb-3"
                type="text"
                placeholder="Add users by their name or email"
                value={this.props.inputValue}
                onChange={this.props.usersFilterOnChange}
              />
            </form>
            {this.props.inputValue.length < 1
              ? this.props.employees.map((item) => (
                  <Users
                    item={item}
                    key={item.id}
                    img={item.img}
                    name={item.name}
                    carier={item.carier}
                    email={item.email}
                    isAded={item.isAded}
                    // toggleUser={this.toggleUsers.bind(this)}
                  />
                ))
              : searchedUsers.map((item) => (
                  <Users
                    item={item}
                    key={item.id}
                    img={item.img}
                    name={item.name}
                    carier={item.carier}
                    email={item.email}
                    isAded={item.isAded}
                    // toggleUser={this.toggleUsers.bind(this)}
                  />
                ))}
            <div className="float-right mb-3">
              <button
                className="btn btn-outline-primary"
                onClick={this.props.handleDiscard}
              >
                Discard
              </button>

              <button
                className="btn btn-primary ml-2"
                onClick={this.props.handleCreate}
                disabled={AddedEmp.length < 1}
              >
                Create
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
    usersFilterOnChange: (event) =>
      dispatch({ type: "USERS_FILTER_ON_CHANGE", payload: event.target.value }),
    handleDiscard: (e) => dispatch({ type: "HANDLE_DISCARD", payload: e }),
    handleCreate: (e) => dispatch({ type: "HANDLE_CREATE", payload: e }),
  };
};
const mapStateToProps = ({ employees, inputValue, groupName, userGroup }) => {
  return {
    employees,
    inputValue,
    groupName,
    userGroup,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
