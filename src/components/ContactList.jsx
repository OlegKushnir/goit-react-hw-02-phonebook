import PropTypes from 'prop-types';
import css from './ContactList.module.css';
export const ContactList = ({ contacts, filter, deleteContact }) => {
  if (filter) {
    return (
      <ul>
        {filter.map(contact => (
          <li key={contact.id} id={contact.id} className={css.item}>
            {contact.name}: {contact.number}
            <button
              className={css.deleteBtn}
              type="button"
              onClick={deleteContact}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id} id={contact.id} className={css.item}>
          {contact.name}: {contact.number}
          <button
            className={css.deleteBtn}
            type="button"
            onClick={deleteContact}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
