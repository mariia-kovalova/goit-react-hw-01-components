import PropTypes from 'prop-types';
import { Item, Label, Percentage } from './StatisticsItem.styled';

export const StatisticsItem = ({ label, percentage, backgroundColor }) => {
  return (
    <Item backgroundColor={backgroundColor}>
      <Label>{label}</Label>
      <Percentage>{percentage}%</Percentage>
    </Item>
  );
};

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  backgroundColor: PropTypes.string,
};
