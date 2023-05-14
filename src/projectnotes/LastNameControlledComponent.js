import { useState } from 'react';

export default function LastNameControlledComponent() {
  const [label, setLabel] = useState('');
  const [userLastnameInput, setUserLastnameInput] = useState('');

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      {label !== '' && <p>Last Name: {label}</p>}
      <input
        value={userLastnameInput}
        onChange={(event) => {
          setUserLastnameInput(event.currentTarget.value);
        }}
      />
      {userLastnameInput === '' ? (
        ' please type the last name ⌨️'
      ) : (
        <button
          onClick={() => {
            setLabel(userLastnameInput);
          }}
        >
          update label
        </button>
      )}
      <button> Add guest to guest list </button>
    </form>
  );
}
