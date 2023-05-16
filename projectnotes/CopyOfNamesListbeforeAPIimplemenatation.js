import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CheckboxControlledComponent from './CheckboxControlledComponent';

export default function NamesList() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [guests, setGuests] = useState([]);

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }
  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleSubmit(event) {
    const newGuests = [
      ...guests,
      {
        firstName: firstName,
        lastName: lastName,
      },
    ];
    setGuests(newGuests);
    setFirstName('');
    setLastName('');
    event.preventDefault();
  }

  const deleteGuest = (indexOfGuest) => {
    setGuests(guests.filter((val, i) => i !== indexOfGuest));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstname"> First name </label>
        <input
          onChange={handleFirstNameChange}
          value={firstName}
          placeholder="Enter a first name"
          id="firstname"
        />
        <label htmlFor="lastName"> Last name </label>
        <input
          onChange={handleLastNameChange}
          value={lastName}
          placeholder="Enter a last name"
          id="lastname"
        />
        <button>Add guest to guest list</button>
      </form>
      <br />
      <h2>Guest list</h2>
      <br />

      {guests.map((guest, index) => {
        return (
          <div key={`guest-${guest.index}`}>
            <p>{guest.firstName}</p>
            <p>{guest.lastName}</p>
            <p>
              {' '}
              <CheckboxControlledComponent />
              {console.log(guest)}
              {console.log(guests)}
            </p>
            <button onClick={() => deleteGuest(index)}>
              Remove {`${guest.firstName} ${guest.lastName}`}
            </button>
          </div>
        );
      })}
    </div>
  );
}
