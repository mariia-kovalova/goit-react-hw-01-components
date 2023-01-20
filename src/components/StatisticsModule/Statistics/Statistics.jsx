import PropTypes from 'prop-types';
import { Container } from 'components/GlobalStyles.styled';
import { StatisticsTitle, Wrapper } from './Statistics.styled';
import { StatisticsList } from '../StatisticsList/StatisticsList';

export const Statistics = ({ title, stats: data }) => {
  return (
    <Container>
      <Wrapper>
        {title && <StatisticsTitle>{title}</StatisticsTitle>}
        <StatisticsList data={data} />
      </Wrapper>
    </Container>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
