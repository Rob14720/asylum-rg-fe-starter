import React, { useState } from 'react';
import { Button } from 'antd';
import { useAuth0 } from '@auth0/auth0-react';

const ProfileButton = () => {
  const [showProfile, setShowProfile] = useState(false);
  const { user, isAuthenticated, isLoading } = useAuth0();

  const toggleProfile = () => {
    setShowProfile(!showProfile);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return null; // If not logged in, don't render the button
  }

  return (
    <div>
      <Button onClick={toggleProfile}>Profile Info</Button>
      {showProfile && (
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      )}
    </div>
  );
};

export default ProfileButton;
