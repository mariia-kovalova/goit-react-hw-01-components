import PropTypes from 'prop-types';
import { Item, StatusCircle, FriendName } from './FriendItem.styled';

export const FriendItem = ({ isOnline, name, avatar }) => {
  return (
    <Item>
      <StatusCircle isOnline={isOnline}></StatusCircle>
      <img src={avatar} alt={name} width="72" />
      <FriendName>{name}</FriendName>
    </Item>
  );
};

FriendItem.prototype = {
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
