import React from 'react';

const Avatar = ({ avatarData }) => {
  const { name, picture } = avatarData;

  return (
    <div>
      <img src={picture.medium} alt={name.first} />
      <p>{`${name.first} ${name.last}`}</p>
    </div>
  );
};

export default Avatar;