import PropTypes from 'prop-types';
export const Filter = ({filterContacts}) => {
return <input type="text" name="filter" onChange={filterContacts} />
}

Filter.propTypes = {
    addContact: PropTypes.func
  };