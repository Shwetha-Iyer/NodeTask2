import './App.css';
import Loginpage from "./loginpage";
import Reset from "./reset";
import Forgot from "./forgot";
import Signup from "./signup";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"; 
import Dashbord from './dashbord';
function App() {
  return <>
    <div>
    <Router>
      <Switch>
        <Route path="/" component={Loginpage} exact={true}></Route>
        <Route path="/forgot" component={Forgot} exact={true}></Route>
        <Route path="/signup" component={Signup} exact={true}></Route>
        <Route path="/dashboard" component={Dashbord} exact={true}></Route>
        <Route path="/resetpwd/:token" component={Reset} exact={true}></Route>
      </Switch>
    </Router>
    </div>
  </>
}

export default App;
