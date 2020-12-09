import React from "react";

function EmployeesCard({ listOfalphabetic, employees, Checked }) {
  return (
    <section className="employees ">
      <h1 className="employees__h1">Employees</h1>
      <div className="employees__list">
        {listOfalphabetic.map((item) => {
          let filtered = employees.filter(
            (name) => name.lastName[0] === item.toUpperCase()
          );
          return (
            <div key={item.id} className="employees__list__card">
              <h1 className="employees__list__card--h1">
                {item.toUpperCase()}
              </h1>
              {filtered.length === 0 ? (
                <div>
                  <label htmlFor={item.id}>---</label>
                </div>
              ) : (
                filtered.map((item) => (
                  <>
                    <div key={item.id} className="employees__list__box">
                      <label htmlFor={item.id}>
                        {item.lastName + " " + item.firstName}
                      </label>
                      {item.isChaked === true ? (
                        <div className="employees__list__box__container">
                          <span className="employees__list__box__checked"></span>
                          <input
                            type="checkbox"
                            className="employees__list__box__input"
                            id={item.id}
                            onChange={() => Checked(item.id)}
                            checked
                          ></input>
                        </div>
                      ) : (
                        <input
                          type="checkbox"
                          className="employees__list__box__input"
                          id={item.id}
                          onClick={() => Checked(item.id)}
                        ></input>
                      )}
                    </div>
                  </>
                ))
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default EmployeesCard;
