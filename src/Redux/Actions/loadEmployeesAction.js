export const LOAD_EMPLOYEES = "LOAD_EMPLOYEES";
export const IS_CHEKED_EMPLOYEE = "IS_CHEKED_EMPLOYEE";

export const loadEployeesData = (data) => {
  console.log("ACtion");
  console.log(data);
  return {
    type: LOAD_EMPLOYEES,
    data,
  };
};

export const isChekedEmployee = (id) => {
  console.log("isChekedEmployeeACtion");
  console.log(id);
  return {
    type: IS_CHEKED_EMPLOYEE,
    id,
  };
};
