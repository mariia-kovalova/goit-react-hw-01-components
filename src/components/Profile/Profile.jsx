import { StatsList } from 'components/StatsList/StatsList';
import PropTypes from 'prop-types';
import {
  Container,
  Description,
  Thumb,
  Avatar,
  Location,
  Name,
  Tag,
} from './Profile.styled';

export function Profile(props) {
  const { username, tag, location, avatar, stats } = props;
  return (
    <Container>
      <Description>
        <Thumb>
          <Avatar src={avatar} alt="User avatar" />
        </Thumb>

        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>
      <StatsList stats={stats} />
    </Container>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number.isRequired),
};
