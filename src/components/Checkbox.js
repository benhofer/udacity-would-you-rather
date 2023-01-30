import React from "react";

const Checkbox = (props) => (
  <div className='form-check mr-4'>
    <label>
      <input
        type='checkbox'
        name={props.label}
        checked={props.isSelected}
        onChange={(e) => {
          props.onCheckboxChange(e);
        }}
        className='form-check-input'
      />
      {props.label}
    </label>
  </div>
);

export default Checkbox;
