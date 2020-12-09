import {
  IS_CHEKED_EMPLOYEE,
  LOAD_EMPLOYEES,
} from "../Actions/loadEmployeesAction";

export const employeesReducer = (
  state = [],
  action
) => {
  console.log("employeesReducerREDUCER");
  console.log(action);
  console.log(state);
  switch (action.type) {
    case LOAD_EMPLOYEES:
      return action.data
    case IS_CHEKED_EMPLOYEE:
      return [...state].map((item) => {
        if (item.id === action.id) {
          return {
            ...item,
            isChaked: !item.isChaked,
          };
        }
        return item;
      });
    default:
      return state;
  }
};
