import { useState } from 'react';

export default function FirstNameControlledComponent() {
  const [label, setLabel] = useState('');
  const [userFirstnameInput, setUserFirstnameInput] = useState('');

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      {label !== '' && <p>First name: {label}</p>}
      <input
        value={userFirstnameInput}
        onChange={(event) => {
          setUserFirstnameInput(event.currentTarget.value);
        }}
      />
      {userFirstnameInput === '' ? (
        ' please type the first name ⌨️'
      ) : (
        <button
          onClick={() => {
            setLabel(userFirstnameInput);
          }}
        >
          update label
        </button>
      )}
    </form>
  );
}
