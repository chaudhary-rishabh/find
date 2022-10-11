import { Route, Routes, Router } from "react-router-dom";
import './Style/App.css';
import Profile from './Components/Profile';
import Error from './Components/Error';
import Find from "./Components/Find";
import Explore from "./Components/Explore";
import Message from "./Components/Message";
import Setting from "./Components/Setting";
import Location from "./Components/Location";
import Sports from "./Components/Sports";
import Esports from "./Components/Esports";
import Adventure from "./Components/Adventure";
import Compiesports from "./Components/Compiesports";
import Prosports from "./Components/Prosports";

function App() {
  return (
    <div id="light">
      <Routes>
        <Route path='/' element={<Explore/>} />
        <Route path='profile' element={<Profile/>}></Route> 
        <Route path='find' element={<Find />}></Route>
        <Route path="find/sports" element={<Sports />} />
        <Route path="find/esports" element={<Esports />} />
        <Route path="find/adventure" element={<Adventure />} />
        <Route path="find/competitiveesports" element={<Compiesports />} />
        <Route path="find/professionalsports" element={<Prosports />} />
        <Route path="find/location" element={<Location />} />
        <Route path='message' element={<Message />}></Route>
        <Route path='setting' element={<Setting/>}></Route>
        <Route path='*' element={<Error/>}></Route>    
      </Routes>
    </div>
  );
}

export default App;
