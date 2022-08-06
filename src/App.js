import './App.css';
import Layout from './Components/Layout/Layout';
import {BrowserRouter as Router} from "react-router-dom";
import userContext from "./userContext";
function App() {
  return (
    <>
    <Router>
     <userContext.Provider value='hello'>
    <Layout/>
    </userContext.Provider>
    </Router>
    </>
  );
}

export default App;
