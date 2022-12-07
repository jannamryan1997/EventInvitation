import { React } from 'react';
import { BrowserRouter,Routes,Route} from 'react-router-dom';

import { Home,AboutUs,Invitation,Main,InvitationNumberTwo} from '../Pages/index';

export function MainRoutes() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Main/>}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Route>
       
        <Route path="/invitation" element={<Invitation />} />
        <Route path="/invitationtwo" element={<InvitationNumberTwo />} />
        </Routes>
    </BrowserRouter>

  )
}

export default MainRoutes;