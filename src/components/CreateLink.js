import React, { useState } from 'react';

const CreateLink = () => {
  const [formState, setFormState] = useState({
    description: '',
    url: '',
  });

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={formState.description}
            onChange={(e) =>
              setFormState({
                ...formState,
                description: e.target.value,
              })
            }
            placeholder="A description for the link"
          />
          <input
            className="mb2"
            value={formState.url}
            onChange={(e) =>
              setFormState({
                ...formState,
                url: e.target.value,
              })
            }
            placeholder="The URL for the link"
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default CreateLink;
