const initialState = {
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
    groupNamee: () => initialState.groupName,
    groupMembers: [],
  },
};

export const reducer = (state = initialState, action) => {
  let newState = { ...state };
  let { type, payload } = action;
  let { employees } = newState;
  switch (type) {
    case "TOGGLE_USERS":
      //   let { employees } = newState;
      let newEmp = [...employees];
      let indexOfID = newEmp.map((el) => el.id).indexOf(payload);

      newEmp[indexOfID].isAded = !newEmp[indexOfID].isAded;
      newState.employees = newEmp;

      break;
    case "USERS_FILTER_ON_CHANGE":
      newState.inputValue = payload;

      break;

    case "HANDLE_DISCARD":
      payload.preventDefault();
      let empemp = employees.map((x) =>{
          let newX = {...x}
         newX.isAded = false 
          return newX
        });
      newState.employees = empemp;

      break;
    case "HANDLE_CREATE":
      payload.preventDefault();
      let item = employees.filter((item) => item.isAded === true);
      newState.employees.groupMembers = item;
      newState.employees.groupName = payload.target.value;

      break;

    default:
      break;
  }
  return newState;
};
