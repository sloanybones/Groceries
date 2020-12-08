
import Grocery from "./Grocery";

const List = (props) => {
  const renderGroceries = () => {
    
    return props.items.map((grocery) =>{
      return (
        <Grocery
        key={grocery.id}
        id={grocery.id}
        name={grocery.name}
        complete={grocery.complete}
          />
        );
      });
    };
    return <ul>{renderGroceries()}</ul>;
};

export default List;


