import React from 'react'; 
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import SignPage from './pages/SignPage'; 
import ProfilePage from './pages/ProfilePage'; 
import MainPage from './pages/MainPage'; 
export default function App() {
    return ( 
    <>
        <Router>
            <Route path='/' exact component={SignPage} />
            <Route path='/main' component={MainPage} />
            <Route path='/profile' component={ProfilePage} />
        </Router>
    </> 
    ); 
}