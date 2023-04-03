import React from "react";
import TeamMembers from "./TeamMembers.jsx";
const Employees = ({employees, selectedTeam, handleEmployeeCardClick, handleTeamSelectionChange}) => {

  return (
    <main>
      <div className="mx-8 mb-20 styled-select">
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
          <TeamMembers employees={employees} selectedTeam={selectedTeam} handleEmployeeCardClick={handleEmployeeCardClick}/>
      </div>
    </main>
  );
};

export default Employees;
