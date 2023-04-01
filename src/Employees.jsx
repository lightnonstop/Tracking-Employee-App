import React from "react";
import femaleProfile from "./assets/images/femaleProfile.jpg";
import maleProfile from "./assets/images/maleProfile.jpg";
const Employees = () => {

  return (
    <main>
      <div className="mx-8 my-20 styled-select">
        <select
          className="p-4 rounded w-full cursor-pointer"
          value={selectedTeam}
          onChange={handleTeamSelectionChange}
        >
          <option value="Team A">Team A</option>
          <option value="Team B">Team B</option>
          <option value="Team C">Team C</option>
          <option value="Team D">Team D</option>
        </select>
      </div>
      <div className="grid">
        {employees.map((employee, key) => (
          <div
            id={employee.id}
            key={key}
            className={(employee.teamName === selectedTeam ? "border border-gray-400 rounded-lg flex flex-col justify-center gap-4 pb-4 cursor-pointer overflow-hidden standout" : "border border-gray-400 rounded-lg flex flex-col justify-center gap-4 pb-4 cursor-pointer overflow-hidden")}
            onClick={handleEmployeeCardClick}
          >
            {employee.gender === "female" ? (
              <img className="w-full" src={femaleProfile} />
            ) : (
              <img className="w-full" src={maleProfile} />
            )}
            <div className="pl-4">
              <h5 className="font-bold mb-2">Full Name: {employee.fullName}</h5>
              <p>
                <b>Designation: </b>
                {employee.designation}
              </p>
              <p></p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Employees;
