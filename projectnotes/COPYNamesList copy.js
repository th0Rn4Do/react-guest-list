import { useState } from 'react';
import CheckboxControlledComponent from '../src/CheckboxControlledComponent';

let id = 0;

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
        id: id,
        firstName: firstName,
        lastName: lastName,
      },
      ...guests,
    ];
    id++;
    setGuests(newGuests);
    setFirstName('');
    setLastName('');
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleFirstNameChange}
        value={firstName}
        placeholder="Enter a first name"
      />
      <input
        onChange={handleLastNameChange}
        value={lastName}
        placeholder="Enter a last name"
      />
      <button>Add guest to list</button>
      <br />
      Names:
      {guests.map((user) => {
        return (
          <div key={`user-${user.id}`}>
            <p>{user.firstName}</p>
            <p>{user.lastName}</p>
            <p>
              {' '}
              <CheckboxControlledComponent />{' '}
            </p>
          </div>
        );
      })}
    </form>
  );
}
