import { useState } from "react";

const GroceryFormFunc = (props) => {
  const [groceryName, setGroceryName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addItemCallback(groceryName);
    setGroceryName("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="New Grocery"
          onChange={(e) => {
            setGroceryName(e.target.value);
          }}
          value={groceryName}
        />
      </form>
    </div>
  );
};

export default GroceryFormFunc;