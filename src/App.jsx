import * as React from "react";
import "./input.css";
import Header from "./Header.jsx";
import Content from "./Content.jsx";
import Footer from "./Footer.jsx";
import Employees from "./Employees.jsx";
const App = () => {
  return (
    <div>
      <Header/>
      <Employees/>
      <Content/>
      <Footer/>
    </div>
  );
};
export default App;