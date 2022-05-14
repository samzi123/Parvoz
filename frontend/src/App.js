import OpportunitiesScreen from './screens/OpportunitiesScreen'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ContactScreen from './screens/ContactScreen'
import ThankYouScreen from './screens/ThankYouScreen'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ReactGA from 'react-ga'
import { useEffect } from 'react'

// const TRACKING_ID = "UA-228692110-1"; // OUR_TRACKING_ID
// //const TRACKING_ID = "G-4M15NC40NC";
// // ReactGA.initialize(TRACKING_ID);
// // ReactGA.send("pageview");
// ReactGA.initialize(TRACKING_ID);
// ReactGA.pageview('/');
function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/opportunities' element={<OpportunitiesScreen />} />
          <Route path='/contact' element={<ContactScreen />} />
          <Route path='/thankyou' element={<ThankYouScreen />} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App
