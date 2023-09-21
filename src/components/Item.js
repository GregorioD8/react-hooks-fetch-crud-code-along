import React from "react";

//Deconstruct the onDEeleteItem prop
function Item({ item, onUpdateItem, onDeleteItem }) {

  function handleDeleteClick() {
  //Call onDeleteItem, passing the deleted item
  fetch(`http://localhost:4000/items/${item.id}`, {
    method: "DELETE",
  })
  .then((res) => res.json())
  .then(() => onDeleteItem(item))
}

  //Add function to handle button click
  function handleAddToCartClick() {
    //Add fetch request
    //Call onUpdatedItem, passing the data returned from the fetch request
    fetch(`http://localhost:4000/items/${item.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isInCart: !item.isInCart,
      })
    })
    .then((res) => res.json())
    .then((updatedItem) => onUpdateItem(updatedItem))

  }

  function handleDeleteClick() {
    fetch(`http://localhost:4000/items/${item.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => onDeleteItem(item))
  }

  return (
    <li className={item.isInCart ? "in-cart" : ""}>
      <span>{item.name}</span>
      <span className="category">{item.category}</span>
        {/* add the onClick listener */}
      <button 
      className={item.isInCart ? "remove" : "add"}
      onClick={handleAddToCartClick}
      >
        {item.isInCart ? "Remove From" : "Add to"} Cart
      </button>
      <button className="remove" onClick={handleDeleteClick}>
        Delete
      </button>
    </li>
  );
}

export default Item;





//////////////////////////////////
// Delete steps
// When X event occurs
// When a user clicks the Delete button, handle the button click
// Make Y fetch request
// Make a DELETE request to /items/:id, using the clicked item's data for the ID
// Update Z state
// Send the clicked item to the ShoppingList component, and set state by creating a new array in which the deleted item has been filtered out