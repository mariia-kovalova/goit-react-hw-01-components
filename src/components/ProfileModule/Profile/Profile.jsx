import { StatsList } from '../StatsList/StatsList';
import PropTypes from 'prop-types';
import { Container } from 'components/GlobalStyles.styled';
import {
  Wrapper,
  Description,
  Thumb,
  Avatar,
  Location,
  Name,
  Tag,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Container>
      <Wrapper>
        <Description>
          <Thumb>
            <Avatar src={avatar} alt="User avatar" />
          </Thumb>

          <Name>{username}</Name>
          <Tag>@{tag}</Tag>
          <Location>{location}</Location>
        </Description>
        <StatsList stats={stats} />
      </Wrapper>
    </Container>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number.isRequired),
};
