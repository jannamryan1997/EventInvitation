import {React} from 'react';
import './App.css';
import 'animate.css';
import './Assets/css/style.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";


import {MainRoutes} from './MainRoutes';


// eslint-disable-next-line require-jsdoc
function App() {
  return (
    <div className="App">
      <MainRoutes/>
      
    </div>
  );
}

export default App;