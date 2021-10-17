import React from "react";
import ContactForm from "./components/Form/Form";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";
import Title from "./components/Title/Title";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Title title="Phonebook" />
      <ContactForm />

      <Title title="Contacts" />
      <Filter />
      <ContactList />
    </div>
  );
}
