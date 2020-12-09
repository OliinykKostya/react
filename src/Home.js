import React, { useEffect } from "react";
import apiRequest from "./Helpers/api";
import { useDispatch, useSelector } from "react-redux";
import "./App.scss";
import {
  isChekedEmployee,
  loadEployeesData,
} from "./Redux/Actions/loadEmployeesAction";
import EmployeesCard from "./Components/EmployeesCard";
import EmployeesBirthday from "./Components/EmployeesBirthday";
import { getEmployees } from "./Redux";
import Spinner from "./Components/Spinner";

const listOfalphabetic = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Home = () => {
  const dispath = useDispatch();
  const employees = useSelector(getEmployees);

  useEffect(() => {
    localStorage.getItem("data")
      ? dispath(loadEployeesData(JSON.parse(localStorage.getItem("data"))))
      : apiRequest().then((response) => dispath(loadEployeesData(response)));
  }, []);

  const Checked = (id) => {
    dispath(isChekedEmployee(id));
  };
  return (
    <>
      {employees.length < 1 ? (
        <Spinner />
      ) : (
        <>
          <EmployeesCard
            listOfalphabetic={listOfalphabetic}
            employees={employees}
            Checked={Checked}
          />
          <EmployeesBirthday
            employees={
              [...employees].find((item) => item.isChaked === true) && employees
            }
            month={month}
          />
        </>
      )}
    </>
  );
};

export default Home;
