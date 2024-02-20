import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserProfile.css';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
  let { id } = useParams();
  console.log(id);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`https://express-t4.onrender.com/api/users/${id}`);
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, [id]);

  if (!user) return <div>Loading...</div>;

  return (
     <div className="profile-container">
      <h2>User Details</h2>
      <div className="profile-info">
        <img src={user.picture} alt={user.name} />
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Company:</strong> {user.company}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Address:</strong> {user.address}</p>
        <p><strong>About:</strong> {user.about}</p>
        <p><strong>Registered:</strong> {user.registered}</p>
        <p><strong>Latitude:</strong> {user.latitude}</p>
        <p><strong>Longitude:</strong> {user.longitude}</p>
        <p><strong>Tags:</strong> {user.tags.join(', ')}</p>
        <p><strong>Friends:</strong> {user.friends.map(friend => friend.name).join(', ')}</p>
        <p><strong>Greeting:</strong> {user.greeting}</p>
        <p><strong>Favorite Fruit:</strong> {user.favoriteFruit}</p>
      </div>
    </div>
  );
};

export default UserProfile;
