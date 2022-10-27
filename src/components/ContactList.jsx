export const ContactList = ({contacts, deleteContact}) => {
  return (
    <>
      <ul>
        {contacts.map(contact=> <li key={contact.id} id={contact.id}>{contact.name}: {contact.number}
        <button type="button" onClick={deleteContact}>delete</button>
        </li>)}
      </ul>
    </>
  );
};
