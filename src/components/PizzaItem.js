import React from "react";
import "./PizzaItem.css";

function PizzaItem({ props, setPizzaItem, deletePizzaItem }) {
  return (
    <div className="pizzaItem-container">
      <table>
        <thead>
          <tr>
            <th>Topping</th>
            <th>Size</th>
            <th>Vegetarian?</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {props.map((pizza) => (
            <tr key={pizza.id}>
              <td>{pizza.toppings}</td>
              <td>{pizza.size}</td>
              <td>{pizza.vegetarian}</td>
              <td>
                <button
                  className="btn btn-secondary edit-button"
                  onClick={() => setPizzaItem(pizza)}
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger edit-button"
                  onClick={() => deletePizzaItem(pizza.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PizzaItem;
