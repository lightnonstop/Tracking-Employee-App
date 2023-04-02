import * as React from "react";
import "./input.css";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Employees from "./Employees.jsx";
import { useState, useEffect } from "react"; 
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import GroupedTeamMembers from "./GroupedTeamMembers.jsx";
const App = () => {

  const [selectedTeam, setTeam] = useState(JSON.parse(localStorage.getItem('selectedTeam')) || "Team B");

  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employeeList')) || [
    {
      id: 1,
      fullName: "Unwana Michael",
      designation: "React Developer",
      gender: "male",
      teamName: "Team A",
    },
    {
      id: 2,
      fullName: "Rita James",
      designation: "Node Developer",
      gender: "female",
      teamName: "Team A",
    },
    {
      id: 3,
      fullName: "Gail Shepherd",
      designation: "Java Developer",
      gender: "female",
      teamName: "Team A",
    },
    {
      id: 4,
      fullName: "Brian Edet",
      designation: "SQL Server Developer",
      gender: "male",
      teamName: "Team B",
    },
    {
      id: 5,
      fullName: "Samuel John",
      designation: "DotNet Developer",
      gender: "male",
      teamName: "Team B",
    },
    {
      id: 6,
      fullName: "Rita James",
      designation: "Node Developer",
      gender: "female",
      teamName: "Team B",
    },
    {
      id: 7,
      fullName: "Gail Shepherd",
      designation: "Java Developer",
      gender: "female",
      teamName: "Team C",
    },
    {
      id: 8,
      fullName: "Henry Son",
      designation: "Angular Developer",
      gender: "male",
      teamName: "Team C",
    },
    {
      id: 9,
      fullName: "Aisha Kumar",
      designation: "C++ Developer",
      gender: "female",
      teamName: "Team C",
    },
    {
      id: 10,
      fullName: "Gate George",
      designation: "Python Developer",
      gender: "male",
      teamName: "Team D",
    },
    {
      id: 11,
      fullName: "Vision Sylvester",
      designation: "Vue Developer",
      gender: "male",
      teamName: "Team D",
    },
    {
      id: 12,
      fullName: "Ibrahim Faye",
      designation: "Graphics Designer",
      gender: "male",
      teamName: "Team D",
    },
  ]);

  useEffect(() => {

    localStorage.setItem('employeeList', JSON.stringify(employees))

  }, [employees])

  useEffect(() => {

    localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam))

  }, [selectedTeam])

  function handleTeamSelectionChange(event) {
    setTeam(event.target.value);
  }
  function handleEmployeeCardClick(event) {
    const transformedEmployees = employees.map((employee) =>
      employee.id === parseInt(event.currentTarget.id)
        ? (employee.teamName === selectedTeam)
          ? { ...employee, teamName: "" }
          : { ...employee, teamName: selectedTeam }
        : employee
    );
    setEmployees(transformedEmployees);
  }

  return (
      <Router>
        <Header selectedTeam={selectedTeam} teamMemberCount={employees.filter((employee) => employee.teamName === selectedTeam).length} />
        <Routes>
          <Route path="/" element={<Employees employees={employees} selectedTeam={selectedTeam} handleEmployeeCardClick={handleEmployeeCardClick} handleTeamSelectionChange={handleTeamSelectionChange} />}>
          </Route>
          <Route path="/GroupedTeamMembers" element={<GroupedTeamMembers/>}>
          </Route>
        </Routes>
        <Footer/>
    </Router>
  );
};
export default App;