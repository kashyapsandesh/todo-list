import React from 'react'

const CheckBoxContainer = (props) => {
   
  return (
    <div>
      <input
        type="checkbox"
        name="checkBox"
        id="check"
        className="checkbox"
        onClick={props.onClick}
      />
    </div>
  );
}

export default CheckBoxContainer