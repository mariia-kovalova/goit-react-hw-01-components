import PropTypes from 'prop-types';
import { Item, Label, Quantity } from './StatsItem.styled';

export function StatsItem(props) {
  const { label, quantity } = props;
  return (
    <Item>
      <Label>{label}</Label>
      <Quantity>{quantity}</Quantity>
    </Item>
  );
}

StatsItem.propTypes = {
  label: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};
