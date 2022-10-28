import React from 'react';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import css from './App.module.css'
export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  addContact = e => {
    e.preventDefault();
    const { name } = e.target.elements;
    const { number } = e.target.elements;
    const { contacts } = this.state;
    if (contacts.find(contact => contact.name === name.value)) {
      alert(name.value + ' is already in contacts.');
      return;
    }
    const contactObj = { id: nanoid(), name: name.value, number: number.value };
    this.setState(pS => {
      return { contacts: [...pS.contacts, contactObj] };
    });
  };

  filterContacts = e => {
    const { value } = e.target;
    const { contacts } = this.state;
    const filtered = contacts.filter(contact =>
      contact.name.toLowerCase().includes(value.toLowerCase())
    );
    if (!value) {
      this.setState({ filter: '' });
      return;
    }
    this.setState({ filter: filtered });
  };

  deleteContact = e => {
    const id = e.target.parentNode.id;
    const { contacts, filter } = this.state;
    const delContact = contacts.filter(contact => contact.id !== id);
    this.setState({ contacts: delContact });
    if (filter && filter.length !== 0) {
      const delFilter = filter.filter(contact => contact.id !== id);
      this.setState({ filter: delFilter });
    }
  };

  render() {
    return (
      <div className={css.wrapper}>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter filterContacts={this.filterContacts} />
        <ContactList
          filter={this.state.filter}
          contacts={this.state.contacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
