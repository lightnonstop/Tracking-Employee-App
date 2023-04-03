import React from 'react'
import femaleProfile from "./assets/images/femaleProfile.jpg";
import maleProfile from "./assets/images/maleProfile.jpg";

const TeamMemberCard = ({employee, handleEmployeeCardClick, selectedTeam}) => {
  return (
    <div
            id={employee.id}
            key={employee.id}
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
  )
}

export default TeamMemberCard
