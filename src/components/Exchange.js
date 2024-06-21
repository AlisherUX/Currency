import { useDispatch, useSelector } from "react-redux";
import * as updateCurrency from "./ExchangeSlice";

export default function ExchangeComponent() {
  const dispatch = useDispatch();
  const { usd, eur } = useSelector((state) => state.exchange);

  const handleUSDChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value)) {
      dispatch(updateCurrency.updateUSD(value));
    }
  };

  const handleEURChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value)) {
      dispatch(updateCurrency.updateEUR(value));
    }
  };

  return (
    <div className="exchange-container">
      <div className="exchange-field">
        <label htmlFor="usd">USD $</label>
        <input type="text" id="usd" value={usd} onChange={handleUSDChange} />
      </div>
      <div className="exchange-field">
        <label htmlFor="eur">EUR €</label>
        <input type="text" id="eur" value={eur} onChange={handleEURChange} />
      </div>
    </div>
  );
};