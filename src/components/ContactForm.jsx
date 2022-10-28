import PropTypes from 'prop-types';
import css from './ContactForm.module.css'
export const ContactForm = ({ addContact }) => {
  return (
    <form onSubmit={addContact} className={css.contactForm}>
      <label className={css.contactLabel}>
        Name
        <input
        className={css.contactInput}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.contactLabel}>Number
      <input
        className={css.contactInput}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      /></label>
      <button className={css.addBtn} type="submit">Add contact</button>
    </form>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired
};