import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

//import Components
import Users from "./Users";
import AddedUsers from "./AddedUsers";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      employees: [
        {
          id: 11,
          img: "https://bootdey.com/img/Content/avatar/avatar1.png",
          name: "Micheal Scott",
          carier: "Manager",
          email: "Scott@gmail.com",
          isAded: false,
        },
        {
          id: 10,
          img: "https://bootdey.com/img/Content/avatar/avatar2.png",
          name: "Todd Packer",
          carier: "Sale",
          email: "Todd@gmail.com",
          isAded: false,
        },
        {
          id: 9,
          img: "https://bootdey.com/img/Content/avatar/avatar3.png",
          name: "Pamela Beesly",
          carier: "Secratary",
          email: "Samantha@gmail.com",
          isAded: false,
        },
        {
          id: 8,
          img: "https://bootdey.com/img/Content/avatar/avatar8.png",
          name: "Samantha swift",
          carier: "Engineer",
          email: "Samantha@gmail.com",
          isAded: false,
        },
        {
          id: 6,
          img: "https://bootdey.com/img/Content/avatar/avatar6.png",
          name: "Sophia Page",
          carier: "Software Engineer",
          email: "sophia@gmail.com",
          isAded: false,
        },
        {
          id: 5,
          img: "https://bootdey.com/img/Content/avatar/avatar5.png",
          name: "Erin Green",
          carier: "Marketing manager",
          email: "Erin@gmail.com",
          isAded: false,
        },
        {
          id: 4,
          img: "https://bootdey.com/img/Content/avatar/avatar4.png",
          name: "Ilya Vasin",
          carier: "QA",
          email: "Ilya@gmail.com",
          isAded: false,
        },
        {
          id: 3,
          img: "https://bootdey.com/img/Content/avatar/avatar3.png",
          name: "Mohammad Malekpoor",
          carier: "React developer",
          email: "Mohammad@gmail.com",
          isAded: false,
        },
        {
          id: 2,
          img: "https://bootdey.com/img/Content/avatar/avatar2.png",
          name: "Reza Hosseini",
          carier: "back-end developer",
          email: "Reza@gmail.com",
          isAded: false,
        },
        {
          id: 1,
          img: "https://bootdey.com/img/Content/avatar/avatar1.png",
          name: "Karim hanif",
          carier: "Graphic designer",
          email: "Karim@gmail.com",
          isAded: false,
        },
      ],
      inputValue: "",
      groupName: "",
      userGroup: {
        groupNamee: this.groupName,
        groupMembers: [],
      },
    };
  }
  handleCreate(e) {
    e.preventDefault();

    let { employees } = this.state;
    let item = employees.filter((item) => item.isAded === true);
    this.setState({
      groupMembers: item,
      groupName: e.target.value,
    });
    console.log(this.state);
  }
  handleDiscard(e) {
    e.preventDefault();
    let { employees } = this.state;
    employees.map((x) => (x.isAded = false));
    this.setState({
      ...employees,
      inputValue: "",
    });
  }
  toogleUsers(id) {
    let { employees } = this.state;
    let item = employees.find((item) => item.id === id);
    item.isAded = !item.isAded;
    this.setState({
      item,
    });
  }

  usersFilterOnChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  render() {
    let { employees } = this.state;
    let AddedEmp = employees.filter((item) => item.isAded === true);
    let searchedUsers = employees.filter((item) => {
      return item.name
        .toLowerCase()
        .includes(this.state.inputValue.toLowerCase());
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
                  value={this.state.groupName}
                  onChange={this.handleCreate.bind(this)}
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
                      toggleUser={this.toogleUsers.bind(this)}
                    />
                  ))
                )}
              </div>
              <input
                className="form-control mb-3"
                type="text"
                placeholder="Add users by their name or email"
                value={this.state.inputValue}
                onChange={this.usersFilterOnChange.bind(this)}
              />
            </form>
            {this.state.inputValue.length < 1
              ? this.state.employees.map((item) => (
                  <Users
                    item={item}
                    key={item.id}
                    img={item.img}
                    name={item.name}
                    carier={item.carier}
                    email={item.email}
                    isAded={item.isAded}
                    toggleUser={this.toogleUsers.bind(this)}
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
                    toggleUser={this.toogleUsers.bind(this)}
                  />
                ))}
            <div className="float-right mb-3">
              <button
                className="btn btn-outline-primary"
                onClick={this.handleDiscard.bind(this)}
              >
                Discard
              </button>
              <button
                className="btn btn-primary ml-2"
                onClick={this.handleCreate.bind(this)}
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

export default App;
