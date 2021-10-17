import React, { useState } from "react";
// import PropTypes from "prop-types";
import s from "./Form.module.css";
import { useSelector, useDispatch } from "react-redux";
import phonebookActions from "../../redux/phonebook/actions";
import { getContacts } from "../../redux/phonebook/selectors";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleContactData = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const checkExistAndAdd = (newContact) => {
    contacts.some(
      (contact) =>
        contact.name.toLocaleLowerCase() ===
          newContact.name.toLocaleLowerCase() ||
        contacts.some((contact) => contact.number === newContact.number)
    )
      ? alert(
          `Friend ${newContact.name} or number ${newContact.number} is alredy exist`
        )
      : dispatch(phonebookActions.addContact(newContact));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkExistAndAdd({ name, number });
    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={handleSubmit} className={s.addContact}>
      <label>
        Name
        <input
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={handleContactData}
        />
      </label>

      <label>
        Number
        <input
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={handleContactData}
        />
      </label>

      <button type="submit" className={s.button}>
        Add contact
      </button>
    </form>
  );
}
