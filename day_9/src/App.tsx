import { useState } from 'react'
import './App.css'
import {Route,Routes} from "react-router-dom"
import PersonalInfo from './components/PersonalInfo'
import ProfilePage from './components/ProfilePage'
import ReviewConfirm from './components/ReviewConfirm'
import AccountDetails from './components/AccountDetails'
import UserContextProvider from "./context/userContext"



function App() {


  return (
    <>
    <div className='App'>
      <UserContextProvider>
       <Routes>
          <Route path="/" element={<PersonalInfo />}/>
          <Route path="/account-details" element={<AccountDetails />}/>
          <Route path="/profile" element={<ProfilePage />}/>
          <Route path="/review-confirm" element={<ReviewConfirm />}/>
       </Routes>
       </UserContextProvider>
    </div>
    
    </>
  )
}

export default App
