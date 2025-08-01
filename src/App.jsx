import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Getrecipes from './components/Getrecipes';
import Showrecipes from './components/Showrecipes';
import Createrecipes from './components/Createrecipes';
import Login_Signup from './components/Login_Signup';
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        
          <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/get-recipes" element={<Getrecipes />} />
          <Route path="/recipe/:id" element={<Showrecipes />} />
          <Route path="/create-recipes" element={<Createrecipes />} />
          <Route path="/login_signup" element={<Login_Signup />} />


        </Routes>
      </div>
    </Router>
  );
}

export default App;



