
import './App.css'
// import components
import Header from './components/Header';
import Footer from './components/Footer';

// import routes and route
import {Routes, Route} from 'react-router-dom';

// import pages
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails'

function App() {
 

  return (
    <>
    
      <div className='App max-w-[1440px] mx-auto dark:bg-black'>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App
