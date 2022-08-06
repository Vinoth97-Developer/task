import React from "react";
import './ImageContent.css';
import Bird from '../Assets/Images/Bird.jpg';
import {useNavigate} from "react-router-dom";

function ImageContent() {
    
  const navigate = useNavigate()
  const goToPersons=()=>{
    navigate("/person-list")
  }
 return ( <>
    <div className="image-container">
        <div className="img-div">
            <img className="img-content" src={Bird} alt="Bird" onClick={()=>goToPersons()} />
            
        </div>
      
    </div>
    </> );
}

export default ImageContent;