 import './App.css';
import Login from './Components/Login';
import { selectUser } from './features/userSlice';
import {useSelector} from "react-redux";
import Logout from './Components/Logout';

function App() {
  const user = useSelector(selectUser)
  return (
    <div>
      {user ? <Logout/>: <Login/>}
 
       
    </div>
  );
}

export default App;
