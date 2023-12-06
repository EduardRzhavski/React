import React from 'react';
import Avatar from './Avatar';

const AvatarsList = ({ avatars, filterTerm }) => {
  const filteredAvatars = avatars.filter((avatar) =>
    avatar.name.first.toLowerCase().includes(filterTerm.toLowerCase())
  );

  return (
    <div>
      {filteredAvatars.map((avatar, index) => (
        <Avatar key={index} avatarData={avatar} />
      ))}
    </div>
  );
};

export default AvatarsList;