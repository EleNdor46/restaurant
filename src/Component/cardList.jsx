import React, { useState } from "react";
import FoodCard from "./foodCard";
import ButtonBasket from "./buttonBasket";
const CardList = ({ positions }) => {
  const [status, setStatus] = useState(0);
  const [allPrice ,setAllPrice] = useState(0)
  const handlePosition = (operator,order) => {
    if (operator === "+") {
      let count = status;
      setStatus(++count);
      let price = allPrice
      price +=order
      setAllPrice(price)
    }
    if (operator === "-") {
      let count = status;
      setStatus(--count);
      let price = allPrice
      price -=order
      setAllPrice(price)

    }
  };
  return (
    <>
      {!positions && <span>Loading...</span>}
      <div className="d-flex justify-content-center align-items-center row row-cols-1 row-cols-lg-4">
        {positions &&
          positions.map((position) => {
            return (
              <FoodCard
                id={position.id}
                url={position.url}
                name={position.name}
                description={position.description}
                price={position.price}
                key={position.id}
                handlePosition={handlePosition}
              />
            );
          })}
      </div>
      {status !== 0 && <ButtonBasket status={status}  price={allPrice}/>}
    </>
  );
};

export default CardList;
