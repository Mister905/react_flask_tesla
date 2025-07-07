import React from "react";
import { useSelector } from "react-redux";

const TotalPrice = () => {
  const { totalPrice } = useSelector((state) => state.model_y);
  return (
    <div>
      <h3 className="font-semibold text-lg">{`${totalPrice.toLocaleString(
        "en-US",
        {
          style: "currency",
          currency: "USD",
        }
      )}`}</h3>
      <p id="total-price" className="text-2xl font-bold">
        {`${totalPrice.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}`}
      </p>
    </div>
  );
};

export default TotalPrice;
