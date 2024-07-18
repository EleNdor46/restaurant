import React, { useState } from "react";
import ButtonValid from "./buttonValid";

const FoodCard = ({ id, url, name, description, price, handlePosition }) => {
  const [count, setCount] = useState(0);
  const handlePlus = () => {
    let value = count;
    setCount(++value);
    handlePosition("+",price);
  };
  const handleMinus = () => {
    let value = count;
    setCount(--value);
    handlePosition("-",price);
  };
  return (
    <>
      <div className="card crd m-3" key={id}>
        <img src={url} className="card-img-top " alt="..."></img>
        <div className="card-body">
          <h3 className="card-title">{name}</h3>
          <p className="card-text">{description}</p>

          {count ? (
            <ButtonValid
              value={count}
              onPlus={handlePlus}
              onMinus={handleMinus}
            />
          ) : (
            <button className="btn btn-primary" onClick={handlePlus}>
              Добавить в корзину
            </button>
          )}

          <span className="ms-4">{price}₽</span>
        </div>
      </div>
    </>
  );
};

export default FoodCard;
