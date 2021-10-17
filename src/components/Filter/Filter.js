import React from "react";
// import PropTypes from "prop-types";

import { useSelector, useDispatch } from "react-redux";
import phonebookActions from "../../redux/phonebook/actions";
import { getFilter } from "../../redux/phonebook/selectors";

export default function Filter() {
  const inputValue = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <>
      <label>
        Find contacts by name
        <input
          type="text"
          value={inputValue}
          onChange={(e) =>
            dispatch(phonebookActions.changeFilter(e.target.value))
          }
        />
      </label>
    </>
  );
}
