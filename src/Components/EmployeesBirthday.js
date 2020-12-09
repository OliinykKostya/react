import React from "react";
import NoData from "./NoData";
function EmployeesBirthday({ employees, month }) {
  if(!employees) {
    return <NoData title="No selected employees"/>
  }
  return (
    <section className="employeesbirthday">
      <div className="employeesbirthday__box">
        <h1 className="employeesbirthday__box__h1">Employees Birthday</h1>
      </div>
      <div className="employeesbirthday__list">
        {month.map((item, i) => {
          let filteredEmployees = employees
            .filter(
              (item) =>
                item.isChaked === true &&
                new Date(item.dob.slice(0, 10)).getMonth() === i
            )
            .sort((a, b) => new Date(a.dob) - new Date(b.dob));
          return (
            <ul key={item.id}>
              {filteredEmployees.length >= 1 && (
                <h1 className="employeesbirthday__list--year--titile">
                  {item}
                </h1>
              )}
              {filteredEmployees.map((item) => (
                <li className="employeesbirthday__list__li">{`${
                  item.lastName
                } ${item.firstName} - ${item.dob.slice(5, 7)} ${
                  month[i]
                }, ${item.dob.slice(0, 4)} year`}</li>
              ))}
            </ul>
          );
        })}
      </div>
    </section>
  );
}

export default EmployeesBirthday;
