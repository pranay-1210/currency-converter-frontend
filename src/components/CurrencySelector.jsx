import currencies from "../util/currencies";

const CurrencySelector = ({ label, value, onChange, name }) => {
  return (
    <div className="flex flex-col gap-1">
      {/* Label */}
      <label
        htmlFor={name}
        className="text-sm font-semibold text-gray-700"
      >
        {label}
      </label>

      {/* Select wrapper */}
      <div className="relative">
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className="
            w-full rounded-xl border border-gray-300 bg-white
            px-4 py-3 pr-10 text-gray-800
            shadow-sm
            focus:outline-none focus:ring-2 focus:ring-blue-500
            focus:border-transparent
            transition
          "
        >
          {Object.keys(currencies).map((currency) => (
            <option key={currency} value={currency}>
              {currencies[currency].flag} {currency} — {currencies[currency].name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CurrencySelector;
