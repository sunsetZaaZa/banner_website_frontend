import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'

import WorkshopTools from './tablets/WorkshopTools'
import Homepage from './tablets/Homepage'
import MobileApps from './tablets/MobileApps'
import ContactEstafette from './tablets/mobileapps/ContactEstafette'
import OuterfacingBusinessContact from './tablets/OuterfacingBusinessContact'
import UserPrivacy from './tablets/UserPrivacy'
import SoftwareLibraries from './tablets/SoftwareLibraries'
import CCEIA from './tablets/software_libraries/Contacts_Calendar_Events_IOS_Android'


function App() {

  return (
    <span>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/mobileapps" element={<MobileApps/>} />
          <Route path="/mobileapps/contactestafette" element={<ContactEstafette/>} />
          <Route path="/about" element={<OuterfacingBusinessContact/>} />
          <Route path="/user_privacy" element={<UserPrivacy/>} />
          <Route path="/software_libaries" element={<SoftwareLibraries/>} />
          <Route path="/software_libraries/cceia" element={<CCEIA/>}></Route>
          <Route path="/consulting" element={<WorkshopTools/>} />
        </Routes>
        </BrowserRouter>
    </span>
  )
}

export default App
