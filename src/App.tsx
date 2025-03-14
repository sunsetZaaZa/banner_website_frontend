import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'

import WorkshopTools from './tablets/WorkshopTools'
import Homepage from './tablets/Homepage'
import MobileApps from './tablets/MobileApps'
import ContactEstafette from './tablets/mobileapps/ContactEstafette'
import OuterfacingBusinessContact from './tablets/OuterfacingBusinessContact'
import UserPrivacy from './tablets/UserPrivacy'

function App() {

  return (
    <>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Homepage/>} />
          <Route path="/mobileapps" element={<MobileApps/>} />
          <Route path="/mobileapps/contactestafette" element={<ContactEstafette/>} />
          <Route path="/about" element={<OuterfacingBusinessContact/>} />
          <Route path="/user_privacy" element={<UserPrivacy/>} />
          <Route path="/consulting" element={<WorkshopTools/>} />
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
