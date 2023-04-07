import React from "react";

const Teams = ({selectedTeam, handleTeamSelectionChange}) => {
  return (
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
  );
};

export default Teams;
