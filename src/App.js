import React from 'react'; 
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import SignPage from './pages/SignPage'; 
import VoicePage from './pages/VoicePage'; 
import MainPage from './pages/MainPage'; 
import MedicalPage from './pages/MedicalPage';
import MedicalResultPage from './pages/MedicalResultPage';
import CommunityPage from './pages/CommunityPage';

export default function App() {
    return ( 
    <>
        <Router>
            <Route path='/' exact component={SignPage} />
            <Route path='/main' component={MainPage} />
            <Route path='/voice' component={VoicePage} />
            <Route path='/medical' exact component={MedicalPage} />
            <Route path='/medical/result' component={MedicalResultPage} />
            <Route path='/community' component={CommunityPage} />
        </Router>
    </> 
    ); 
}