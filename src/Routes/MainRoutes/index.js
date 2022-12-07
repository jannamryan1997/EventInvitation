import { React } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import { Main,Invitation} from '../../Pages/index';

export function MainRoutes() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
    </BrowserRouter>

  )
}

export default MainRoutes;
