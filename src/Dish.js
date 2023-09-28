import React, { useState } from "react";
import "./styles.css";

function Menu() {
  const [dishes, setDishes] = useState([]);
  const [newDish, setNewDish] = useState({
    name: "",
    ingredients: "",
    price: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewDish({ ...newDish, [name]: value });
  };

  const handleAddDish = () => {
    if (newDish.name && newDish.ingredients && newDish.price) {
      setDishes([...dishes, newDish]);
      setNewDish({ name: "", ingredients: "", price: "" });
    }
  };

  const handleDeleteDish = (index) => {
    const updatedDishes = [...dishes];
    updatedDishes.splice(index, 1);
    setDishes(updatedDishes);
  };

  return (
    <div className="container">
      <h1>Меню</h1>
      <div>
        <h2>Добавить блюдо</h2>
        <input
          type="text"
          name="name"
          placeholder="Название блюда"
          value={newDish.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="ingredients"
          placeholder="Состав блюда"
          value={newDish.ingredients}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="price"
          placeholder="Стоимость"
          value={newDish.price}
          onChange={handleInputChange}
        />
        <button onClick={handleAddDish}>Добавить</button>
      </div>

      <div>
        <h2>Список блюд</h2>
        <ul>
          {dishes.map((dish, index) => (
            <li key={index}>
              <strong>{dish.name}</strong> - {dish.ingredients}, Стоимость:{" "}
              {dish.price} руб.
              <button
                className="delete-button"
                onClick={() => handleDeleteDish(index)}
              >
                Удалить
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Menu;
