import React from 'react';
import TeamMemberCard from './TeamMemberCard.jsx';

const TeamMembers = ({employees, selectedTeam, handleEmployeeCardClick}) => {
  return (
    employees.map((employee) => {
        return <TeamMemberCard employee={employee} handleEmployeeCardClick={handleEmployeeCardClick} selectedTeam={selectedTeam} />
    })
  )
}

export default TeamMembers
