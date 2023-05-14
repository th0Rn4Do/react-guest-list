import { useState } from 'react';

export default function CheckboxControlledComponent() {
  const [isAttending, setIsAttending] = useState(false);

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <label>
          Guest is attending
          <input
            checked={isAttending}
            type="checkbox"
            onChange={(event) => {
              setIsAttending(event.currentTarget.checked);
            }}
            aria-label="attending"
          />
        </label>
      </form>
    </>
  );
}
