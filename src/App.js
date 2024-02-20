import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import LoginForm from './LoginForm';
import ProfileListing from './ProfileListing';
import UserProfile from './UserProfile'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/profile" element={<ProfileListing />} />
          <Route path="/users/:id" element={<UserProfile />} /> {/* Route for UserProfile with ID parameter */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
