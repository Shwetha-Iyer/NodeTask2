import './App.css';
import Loginpage from "./loginpage";
import Forgot from "./forgot";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"; 
function App() {
  return <>
    <div>
    <Router>
      <Switch>
        <Route path="/" component={Loginpage} exact={true}></Route>
        <Route path="/forgot" component={Forgot} exact={true}></Route>
      </Switch>
    </Router>
    </div>
  </>
}

export default App;
