import React from "react";
// import PropTypes from "prop-types";
import s from "./ContactList.module.css";
import { useSelector, useDispatch } from "react-redux";
import phonebookActions from "../../redux/phonebook/actions";
import { getContacts, getFilter } from "../../redux/phonebook/selectors";

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button
            className={s.buttonDelete}
            type="button"
            onClick={() => dispatch(phonebookActions.deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
