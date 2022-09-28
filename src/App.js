import { Route, Switch } from "react-router-dom";
import './Style/App.css';
import Profile from './Components/Profile';
import Error from './Components/Error';
import Find from "./Components/Find";
import Explore from "./Components/Explore";
import Message from "./Components/Message";
import Setting from "./Components/Setting";

function App() {
  return (
    <div>
      <Switch>
        <Route path='/' component={Explore} exact/>
        <Route path='/profile'><Profile/></Route> 
        <Route path='/find'><Find/></Route>
        <Route path='/message'><Message /></Route>
        <Route path='/location'><Setting/></Route>
        <Route path='*'><Error/></Route>
      </Switch>
    </div>
  );
}

export default App;
