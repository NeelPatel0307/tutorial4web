import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ProfileListing.css';

const ProfileListing = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://express-t4.onrender.com/api/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.name.split(' ')[1]?.toLowerCase().includes(searchTerm.toLowerCase()) 
  );

  return (
    <div className="profile-listing">
      <h2>User Profiles</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by Name"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
       
      </div>
      <br />
      <div className="user-list">
        {filteredUsers.map((user, index) => (
          <Link key={index} to={`/users/${user._id}`} className="user-link"> 
            <div className="user-card">
              <img src={user.picture} alt={user.name} />
              <div className="user-details">
                <p><strong>Name:</strong> {user.name}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
     
    </div>
  );
};

export default ProfileListing;
