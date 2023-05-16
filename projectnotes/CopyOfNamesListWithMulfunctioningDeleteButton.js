import PropTypes from 'prop-types';
import { useState } from 'react';
import CheckboxControlledComponent from './CheckboxControlledComponent';

let guestId = 0;

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
      {
        id: guestId,
        firstName: firstName,
        lastName: lastName,
      },
      ...guests,
    ];
    guestId++;
    setGuests(newGuests);
    setFirstName('');
    setLastName('');
    event.preventDefault();
  }

  return (
    <>
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
        <br />
        <h2>Guest list</h2>
        <br />
        {guests.map((guest) => {
          return (
            <div key={`guest-${guest.guestId}`}>
              <p>{guest.firstName}</p>
              <p>{guest.lastName}</p>
              <p>
                {' '}
                <CheckboxControlledComponent />
                {console.log(guest)}
                {console.log(guests)}
              </p>
              <button
                onClick={(event) => {
                  const deleteGuest = [...guests];

                  if (deleteGuest.length < 2) {
                    deleteGuest.shift();
                  } else if (guestId > deleteGuest.length) {
                    deleteGuest.pop();
                  } else {
                    setGuests(deleteGuest.splice(guestId, 1));
                  }
                }}
              >
                Remove {`${guest.firstName} ${guest.lastName}`}
              </button>
            </div>
          );
        })}
      </form>
    </>
  );
}
