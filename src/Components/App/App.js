import './App.css';
import User from '../../Pages/User';
import Home from '../../Pages/Home';
import { BrowserRouter } from 'react-router-dom';
import NavigationBar from '../Navigation/NavigationBar';
import CustomChangeRoute from '../Navigation/CustomChangeRoute';

function App() {

  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <CustomChangeRoute />
      </BrowserRouter>
    </>
  );
}

export default App;
