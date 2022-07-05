import Login from './components/Login/Login';
import { BrowserRouter as Routes, Route, Router } from "react-router-dom";
import Home from './components/Home/Home';
function App() {
  return (
    <div className="App">
      <Login/> 
      
      {/* <Router>
        <Route path='/home' element ={Home}/>
      </Router> */}
    </div>
  );
}

export default App;
