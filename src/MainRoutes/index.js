import { React } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Main} from '../Pages/index';

export function MainRoutes() {
  return (
    <BrowserRouter>
    <Main />
    </BrowserRouter>

  )
}

export default MainRoutes;