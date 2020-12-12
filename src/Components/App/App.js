import './App.css';
import User from '../../Pages/User';
import Home from '../../Pages/Home';
import { BrowserRouter } from 'react-router-dom';
import NavigationBar from '../Navigation/NavigationBar';
import CustomChangeRoute from '../Navigation/CustomChangeRoute';

function App() {
  return (
    <>
    {/* <NavigationBar /> */}
    {/* <Home /> */}
    {/* <User /> */}
    <BrowserRouter>
      <NavigationBar />
      <CustomChangeRoute />
    </BrowserRouter>

    </>
    // <div className="App">
    //   <header className="App-header">
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
