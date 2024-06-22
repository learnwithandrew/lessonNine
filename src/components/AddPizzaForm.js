import React, { useEffect, useState } from "react";
import "./AddPizzaForm.css";

function AddPizzaForm({
  postNewPizza,
  editPizzaItem,
  pizzaItem,
  setPizzaItem,
}) {
  const [formData, setFormData] = useState({
    toppings: "",
    size: "",
    vegetarian: "",
  });

  useEffect(() => {
    if (pizzaItem) {
      setFormData(pizzaItem);
    }
  }, [pizzaItem]);

  const handleToppingsChange = (event) => {
    setFormData({
      ...formData,
      toppings: event.target.value,
    });
  };

  const handleSizeChange = (event) => {
    setFormData({
      ...formData,
      size: event.target.value,
    });
  };

  const handleVegetarianChange = (event) => {
    setFormData({
      ...formData,
      vegetarian: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (pizzaItem) {
      editPizzaItem(pizzaItem.id, formData);
    } else {
      postNewPizza(formData);
    }
    setFormData({
      toppings: "",
      size: "",
      vegetarian: "",
    });
    setPizzaItem(false);
  };

  return (
    <div className="pizzaForm-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter pizza name"
          value={formData.toppings}
          onChange={handleToppingsChange}
        />
        <select
          id="pizzaSize"
          name="pizzaSize"
          value={formData.size}
          onChange={handleSizeChange}
        >
          <option value="" selected disabled hidden>
            Choose size
          </option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
        <div className="form-check">
          <label htmlFor="vegetarian">
            <input
              type="radio"
              id="vegetarian"
              name="isVegetarian"
              value="yes"
              checked={formData.vegetarian === "yes"}
              onChange={handleVegetarianChange}
            />
            &nbsp; Vegetarian
          </label>
          <br />
          <label htmlFor="non-vegetarian">
            <input
              type="radio"
              id="non-vegetarian"
              name="isVegetarian"
              value="no"
              checked={formData.vegetarian === "no"}
              onChange={handleVegetarianChange}
            />
            &nbsp; Non Vegetarian
          </label>
        </div>
        <input type="submit" value={pizzaItem ? "Update" : "Submit"} />
      </form>
    </div>
  );
}

export default AddPizzaForm;
