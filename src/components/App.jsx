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
  addContact = (obj) => {
    const { contacts } = this.state;
    if (contacts.find(contact => contact.name === obj.name)) {
      alert(obj.name + ' is already in contacts.');
      return;
    }
    this.setState(pS => {
      return { contacts: [...pS.contacts, { id: nanoid(), ...obj }] };
    });
  };

  inputFilter = e => {
    const { value } = e.target;
    this.setState({ filter: value });
  }
  
  filterContacts = () => {
    const { contacts } = this.state;
    const value = this.state.filter;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(value.toLowerCase())
    );
  };

  deleteContact = id => {
    const { contacts } = this.state;
    this.setState({ contacts: contacts.filter(contact => contact.id !== id) });
  };

  render() {
    return (
      <div className={css.wrapper}>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter inputFilter={this.inputFilter} value={this.state.filter} />
        <ContactList
          filtered={this.filterContacts()}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
