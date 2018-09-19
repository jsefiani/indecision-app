import React from 'react';

const Action = (props) => {
  return (
    <div>
      <button
        className="button--big"
        onClick={props.handlePick}
        disabled={!props.hasOptions}
        title="Add at least 2 options to use this button"
      >
        What should I do?
      </button>
    </div>
  );
};

export default Action;
