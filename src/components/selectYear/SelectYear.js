import React from "react";
import "../expenses/ExpenseItem.css";
const SelectYear = props => {
  return (
    <div className="select">
      <select
        name="pets"
        id="pet-select"
        onChange={e => props.yearChangeHandler(e.target.value)}
      >
        <option value="">--Please choose a year--</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
        <option value="2022">2022</option>
      </select>
    </div>
  );
};

export default SelectYear;
