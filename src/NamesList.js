import PropTypes from 'prop-types';
import React, { Fragment, useEffect, useState } from 'react';
import CheckboxControlledComponent from './CheckboxControlledComponent';

export default function NamesList() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [guests, setGuests] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const baseUrl = 'http://localhost:4000/guests';

  async function getGuest(guest) {
    const response = await fetch(`${baseUrl}/guests`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ guest }),
    });
    const createdGuest = await response.json();
    console.log(createdGuest);
    setGuests([...guests, createdGuest]);

    //  const allGuests = await response.json();

    //   setGuests([...guests, allGuests.results[0]]);
  }

  useEffect(() => {
    async function firstRenderFetch() {
      const response = await fetch(`${baseUrl}/guests/:id`);

      const guest = await response.json();

      setGuests([guest.id[0]]);
    }

    firstRenderFetch().catch((error) => {
      console.log(error);
    });
  }, []);

  useEffect(() => {
    if (guests.length > 0) {
      setIsLoading(false);
    }
  }, [guests]); // trigger every time users is updated

  if (isLoading) {
    return 'Loading ...';
  }

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }
  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const newGuests = [
      ...guests,
      {
        firstName: firstName,
        lastName: lastName,
      },
    ];
    setGuests(newGuests);
    await getGuest(guests);
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
      <button onClick={async () => await getGuest()}>get User</button>
    </div>
  );
}
