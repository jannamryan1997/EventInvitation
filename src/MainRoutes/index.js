import { React } from 'react';
import { BrowserRouter,Routes,Route} from 'react-router-dom';

import { Home,AboutUs,Invitation,Main,InvitationNumberTwo,InvitationNumberThree,InvitationNumberFour,InvitationFive} from '../Pages/index';

export function MainRoutes() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Invitation/>}>
          {/* <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} /> */}
        </Route>
       
        <Route path="/invitation" element={<Invitation />} />
        <Route path="/invitationtwo" element={<InvitationNumberTwo />} />
        <Route path='/invitationthree' element={<InvitationNumberThree/>}/>
        <Route path='/invitationfour' element={<InvitationNumberFour/>}/>
        <Route path='/invitationfive' element={<InvitationFive/>}/>
        </Routes>
    </BrowserRouter>

  )
}

export default MainRoutes;