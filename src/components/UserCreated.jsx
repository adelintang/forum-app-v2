import React from 'react';
import PropTypes from 'prop-types';

const UserCreated = ({ avatar, name, createdText }) => {
  return (
    <div className="flex gap-1.5">
      {createdText && <span>Dibuat oleh </span>}
      <img src={avatar} alt={name} className="w-6 rounded-full" />
      <span className="font-semibold">{name}</span>
    </div>
  );
};

UserCreated.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  createdText: PropTypes.bool,
};

export default UserCreated;
