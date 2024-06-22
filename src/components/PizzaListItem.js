import React, { useEffect, useState } from "react";
import "./PizzaListItem.css";
import PizzaItem from "./PizzaItem";
import AddPizzaForm from "./AddPizzaForm";

function PizzaListItem() {
  const [pizzaData, setPizzaData] = useState([]);
  const [pizzaItem, setPizzaItem] = useState(false);

  useEffect(() => {
    fetchPizzaData();
  }, []);

  const fetchPizzaData = () => {
    fetch("http://localhost:5000/pizzas")
      .then((response) => response.json())
      .then((data) => setPizzaData(data));
  };

  const postNewPizza = (formData) => {
    fetch("http://localhost:5000/pizzas", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => setPizzaData([...pizzaData, data]));
  };

  const editPizzaItem = (id, formData) => {
    fetch(`http://localhost:5000/pizzas/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        setPizzaData(
          pizzaData.map((pizza) => (pizza.id === data.id ? data : pizza))
        );
      });
  };

  const deletePizza = (id) => {
    fetch(`http://localhost:5000/pizzas/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    setPizzaData(pizzaData.filter((pizza) => pizza.id !== id));
  };

  return (
    <div className="pizzalist-container">
      <AddPizzaForm
        postNewPizza={postNewPizza}
        editPizzaItem={editPizzaItem}
        pizzaItem={pizzaItem}
        setPizzaItem={setPizzaItem}
      />
      {pizzaData.length === 0 ? (
        <p>No data posted yet</p>
      ) : (
        <PizzaItem
          props={pizzaData}
          setPizzaItem={setPizzaItem}
          deletePizzaItem={deletePizza}
        />
      )}
    </div>
  );
}

export default PizzaListItem;
