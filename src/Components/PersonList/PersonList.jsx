import { useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import './PersonList.css';

function PersonList(props) {

useEffect(()=>{
  console.log('person-list',props.list)
},[props.list])
  return (
    <>
      <div className="list-container" >
         <div>
          <h2 style={{color:"white"}}>Persons List</h2>
         </div>
         <div>
        <ListGroup as="ol" style={{width:"330px"}}>
          {props.list.map((item, i) => {
            return (
              <ListGroup.Item as="li" key={"person" + i}  >
                <p>
                   Name: {item.name}
                </p>
                <p>Email: {item.email}</p>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
        </div>
      </div>
    </>
  );
}

export default PersonList;
