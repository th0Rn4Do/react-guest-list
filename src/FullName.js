import { useState } from 'react';

export default function FullName() {
  const [fullName, setFullName] = useState({
    firstName: '',
    lastName: '',
  });
  return (
    <form>
      <label>
        First name
        <input
          type="text"
          name="firstName"
          value={fullName.firstName}
          onChange={(event) => {
            setFullName(event.currentTarget.value);
          }}
        />
      </label>
      <label>
        Last name
        <input
          type="text"
          name="lastName"
          value={fullName.lastName}
          onChange={(event) => {
            setFullName(event.currentTarget.value);
          }}
        />
      </label>
    </form>
  );
}
