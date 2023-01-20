import PropTypes from 'prop-types';
import { Item, Label, Percentage } from './StatisticsItem.styled';

export const StatisticsItem = ({ label, percentage }) => {
  return (
    <Item>
      <Label>{label}</Label>
      <Percentage>{percentage}%</Percentage>
    </Item>
  );
};

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
