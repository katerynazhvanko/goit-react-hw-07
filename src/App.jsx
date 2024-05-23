import { useState, useEffect } from "react";

import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

import { Toaster } from "react-hot-toast";

const getInitialContacts = () => {
  const savedContacts = window.localStorage.getItem("contacts");

  return savedContacts !== null ? JSON.parse(savedContacts) : [];
};

export default function App() {
  const [contacts, setContacts] = useState(getInitialContacts);
  const [filter, setFilter] = useState("");

  // save in memory between reload page

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  //add components

  const addContact = (newContact) => {
    console.log(newContact);
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  // delete component

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  // filter contacts
  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={visibleContacts} onDeleteContact={deleteContact} />
      <Toaster />
    </>
  );
}
