import PropTypes from 'prop-types';
import { capitalize } from 'utils';

export const TransactionsHistotyTr = ({ type, amount, currency }) => {
  return (
    <tr>
      <td>{capitalize(type)}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

TransactionsHistotyTr.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
