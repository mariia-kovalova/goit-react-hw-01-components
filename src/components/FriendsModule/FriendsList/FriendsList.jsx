import PropTypes from 'prop-types';
import { FriendItem } from '../FriendsItem/FriendItem';
import { Container } from 'components/GlobalStyles.styled';
import { FriendsUl } from './FriendsList.styled';

export const FriendsList = ({ friends }) => {
  return (
    <Container>
      <FriendsUl>
        {friends.map(({ id, isOnline, name, avatar }) => (
          <FriendItem
            key={id}
            isOnline={isOnline}
            name={name}
            avatar={avatar}
          />
        ))}
      </FriendsUl>
    </Container>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.array.isRequired,
};
