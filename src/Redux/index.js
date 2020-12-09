import { createStore, combineReducers } from "redux";
import { employeesReducer } from "./Reducers/loadEmployeesReducer";

const rootReducer = combineReducers({
  empoyees: employeesReducer,
});

///Selectors
export const getEmployees = (state) => state.empoyees;

const store = createStore(rootReducer);

store.subscribe(() => {
  localStorage.setItem("data", JSON.stringify(store.getState().empoyees));
});

export default store;
