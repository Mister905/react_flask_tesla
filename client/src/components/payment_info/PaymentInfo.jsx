import React from "react";
import { useSelector } from "react-redux";

const PaymentInfo = () => {
  const { downPayment, monthlyPayment, loanTermMonths, interestRate } =
    useSelector((state) => state.model_y);

  return (
    <div>
      <p>
        Down Payment:{" "}
        <span id="down-payment" className="font-bold">
          {`${downPayment.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}`}
        </span>
      </p>
      <p>
        Loan Term: <span className="font-bold">{loanTermMonths} months</span>
      </p>
      <p>
        Interest Rate:{" "}
        <span className="font-bold">{`${interestRate * 100}`}% APR</span>
      </p>
      <p>
        Estimated Monthly Payment:{" "}
        <span id="monthly-payment" className="font-bold">
          {`${monthlyPayment.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}`}
        </span>
      </p>
    </div>
  );
};

export default PaymentInfo;
