import { useRef } from "react";
import { useState } from "react";
import CurrencySelector from "./CurrencySelector";

const CurrencyConverter = () => {
  const amountInput = useRef();
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const convertHandler = () => {
    fetch("http://localhost:3005/api/convert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: amountInput.current.value,
        sourceCurrency: fromCurrency,
        targetCurrency: toCurrency,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setConvertedAmount(data.targetAmount);
      });
  };

  return (
    <div className="space-y-5">
      {/* Amount */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Amount
        </label>
        <input
          type="number"
          ref={amountInput}
          placeholder="Enter amount"
          className="w-full rounded-lg border border-gray-300 px-4 py-3
                   focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Currency Select */}
      {/* Currency Select */}
      <CurrencySelector
        label="From"
        name="fromCurrency"
        value={fromCurrency}
        onChange={(e) => setFromCurrency(e.target.value)}
      />

      <CurrencySelector
        label="To"
        name="toCurrency"
        value={toCurrency}
        onChange={(e) => setToCurrency(e.target.value)}
      />

      {/* Button */}
      <button
        onClick={convertHandler}
        className="w-full mt-8 bg-blue-600 hover:bg-blue-700
             text-white font-semibold py-3 rounded-lg
             transition focus:outline-none focus:ring-2
             focus:ring-blue-500 active:scale-[0.98]"
      >
        Convert
      </button>
      {/* Converted Result */}
      <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50 p-5 text-center shadow-sm">
        <p className="text-sm text-gray-500 mb-1">Converted Amount</p>

        <div className="text-3xl font-bold text-blue-700 tracking-wide">
          {convertedAmount}
        </div>

        <p className="mt-1 text-xs text-gray-500">
          {fromCurrency} → {toCurrency}
        </p>
      </div>
    </div>
  );
};

export default CurrencyConverter;
