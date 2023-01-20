import { StatsItem } from '../StatsItem/StatsItem';
import { capitalize } from 'utils';
import PropTypes from 'prop-types';
import { List } from 'components/GlobalStyles.styled';

export const StatsList = ({ stats }) => {
  return (
    <List>
      {Object.entries(stats).map(([name, value]) => {
        return (
          <StatsItem key={name} label={capitalize(name)} quantity={value} />
        );
      })}
    </List>
  );
};

StatsList.propTypes = {
  stats: PropTypes.objectOf(PropTypes.number.isRequired),
};
