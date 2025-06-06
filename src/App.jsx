import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NewRestaurant from './pages/NewRestaurant';
import RestaurantDetails from './pages/RestaurantDetails';
import Navbar from './components/Navbar';
import Login from './pages/Login';

function App() {
  return (
    
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<NewRestaurant />} />
        <Route path="/details/:id" element={<RestaurantDetails />} />
         <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App
