import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';

import { Container, TitlePhonebook, TitleContacts } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contact')) ?? '';
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleContactFormSubmit = ({ name, number }) => {
    if (
      contacts.some(contact => {
        return contact.name.toLowerCase() === name.toLowerCase();
      })
    ) {
      toast.warn(`${name} is already in contacts`);
      return;
    }

    const nextContacts = { id: nanoid(), name: name, number: number };
    setContacts([...contacts, nextContacts]);
  };

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  const handleContactDelete = id => {
    setContacts(
      contacts.filter(contact => {
        return contact.id !== id;
      })
    );
  };

  return (
    <Container>
      <TitlePhonebook title="Phonebook">Phonebook</TitlePhonebook>
      <ContactForm handleSubmit={handleContactFormSubmit} />

      <TitleContacts title="Contacts">Contacts</TitleContacts>
      {contacts.length === 0 ? null : (
        <Filter value={filter} onChange={handleFilterChange} />
      )}
      {contacts.length === 0 ? null : (
        <ContactList
          contacts={contacts}
          filter={filter}
          onDelete={handleContactDelete}
        />
      )}
      <ToastContainer />
    </Container>
  );
};

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string,
};
