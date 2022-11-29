import {React} from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';

import {Main} from '../Pages/index';

export function MainRoutes(){
    return (
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Main />}/>
          </Routes>
        </BrowserRouter>
      
    )
}

export default MainRoutes;