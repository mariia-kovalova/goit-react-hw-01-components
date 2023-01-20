import PropTypes from 'prop-types';
import { StatisticsItem } from '../StatisticsItem/StatisticsItem';
import { List } from 'components/GlobalStyles.styled';
import { getRandomHexColor } from 'utils';

export const StatisticsList = ({ data }) => {
  return (
    <List>
      {data.map(({ id, label, percentage }) => (
        <StatisticsItem
          key={id}
          label={label}
          percentage={percentage}
          backgroundColor={getRandomHexColor()}
        />
      ))}
    </List>
  );
};

StatisticsList.propTypes = {
  data: PropTypes.array.isRequired,
};
