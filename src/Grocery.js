import React from 'react';
const Grocery = ({ id, name, complete}) => (
  <li
  style={ complete ? {...styles.grocery, ...styles.complete} : styles.grocery }
  onClick={ () => groceryClick(id) }
  >
    {name}
    <span onClick={handleClick}>-toggle-</span>
  </li>
);

const styles = {
  grocery: { cursor: 'pointer' },
  complete: { color: 'grey', textDecoration: 'line-through' },
};

export default Grocery;


