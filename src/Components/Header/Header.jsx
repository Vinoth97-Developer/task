import React, { useEffect, useState } from "react";
import Menu from "../Menu/Menu";
import AddForm from "../AddForm/AddForm";
import "./Header.css";
import Settings from "../Settings/Settings";
import { useLocation } from "react-router-dom";

function Header(props) {
  const [isPerson, setIsPerson] = useState(false);
  const [persons, setPersons] = useState([]);
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname, location);
    if (location.pathname === "/person-list") {
      setIsPerson(true);
    } else {
      setIsPerson(false);
    }
  }, [location]);

  let getDetails = (value) => {
    let p = [...persons];
    p.push(value);
    setPersons(p);
    console.log('header',p)
    props.handlePerson(p);
  };
  return (
    <>
      <div className="header-container">
        <div className="list-menu" style={{marginLeft:"20px"}} >
          <Menu />
        </div>

        {isPerson ? (
          <div className="add" style={{marginRight:"20px"}}>
            <AddForm sendDetails={getDetails} />
          </div>
        ) : (
          <div className="list-menu" style={{marginRight:"20px"}} >
            <Settings />
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
