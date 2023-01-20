import PropTypes from 'prop-types';
import { Container } from 'components/GlobalStyles.styled';
import { StatisticsTitle, Wrapper } from './Statistics.styled';
import { StatisticsList } from '../StatisticsList/StatisticsList';

export const Statistics = ({ title, stats: data }) => {
  return (
    <Container>
      <Wrapper>
        {title && <StatisticsTitle>{title}</StatisticsTitle>}
        {title && <StatisticsList data={data} />}
      </Wrapper>
    </Container>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.array.isRequired,
};
