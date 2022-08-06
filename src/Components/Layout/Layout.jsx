import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ImageContent from "../ImageContent/ImageContent";
import { Routes,Route, Navigate } from "react-router-dom";
import './Layout.css';
import PersonList from "../PersonList/PersonList";

function Layout() {
   const [list,setlist]=useState([]);
   let handlePerson=(value)=>{
        setlist(value);
        console.log('layout',value);
    }
    return ( <>
    <div className="layout-container">
     <div className="">
    <div className="header">
        <Header handlePerson={handlePerson} />
    </div>
     <Routes>
     <Route path="" element={<Navigate replace to="/image-content" />} />
     <Route path="/image-content" element={<ImageContent/>}/>
      <Route path='/person-list' element={<PersonList list={list}/>}/>
    </Routes>

    <div className="footer">
        <Footer/>
    </div>
     </div>
    </div>
    </> );
}

export default Layout;