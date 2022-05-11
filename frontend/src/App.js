import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <>    
    <Header/>

    <Router>
    <Routes>
    <Route path='/' element={<HomeScreen/>}/>
     </Routes>
     </Router>
     <Footer/>

    </>
  );
}

export default App;
