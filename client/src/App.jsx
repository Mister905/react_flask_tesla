// COMPONENTS
import Nav from "./components/nav/Nav";
import Promotion from "./components/promotion/Promotion";
import ExteriorColourDisplay from "./components/exterior_colour_display/ExteriorColourDisplay";
import InteriorColourDisplay from "./components/interior_colour_display/InteriorColourDisplay";
import Form from "./components/form/Form";
import TotalPrice from "./components/total_price/TotalPrice";
import PaymentInfo from "./components/payment_info/PaymentInfo";

function App() {
  return (
    <>
      <Nav />
      <Promotion />
      <div className="row">
        <div className="col m8">
          <ExteriorColourDisplay />
          <InteriorColourDisplay />
        </div>
        <div className="col m4">
          <div className="card">
            <div className="card-content">
              <Form />
              <TotalPrice />
              <PaymentInfo />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
