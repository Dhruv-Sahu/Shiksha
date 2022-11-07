import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Donate from '../src/components/Donate'
import Tables from './components/Tables';
import { AuthProvider } from './context/AuthContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
        {/* <Route index element={<Home />} /> */}
        {/* <Route path="teams" element={<Teams />}> */}
          {/* <Route path=":teamId" element={<Team />} /> */}
          {/* <Route path="new" element={<NewTeamForm />} /> */}
          {/* <Route index element={<LeagueStandings />} /> */}
        {/* </Route> */}
    <Route path="/Donate" element={<Donate/>}/>
    <Route path='/Tables' element={<Tables/>}/>
    </Routes>
  </BrowserRouter>
  </AuthProvider>
  </React.StrictMode>
);
