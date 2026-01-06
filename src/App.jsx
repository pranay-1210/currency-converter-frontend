import CurrencyConverter from "./components/CurrencyConverter";

function App() {
  return (
    <div
      className="
        min-h-screen
        flex items-center justify-center
        bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50
        px-4
      "
    >
      {/* Main Card */}
      <div
        className="
          w-full max-w-md
          rounded-3xl
          bg-white/80 backdrop-blur-xl
          shadow-[0_20px_60px_-15px_rgba(59,130,246,0.35)]
          border border-white/40
          p-8
          relative
        "
      >
        {/* Decorative gradient circle */}
        <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-blue-400/20 blur-3xl" />
        <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-purple-400/20 blur-3xl" />

        {/* Header */}
        <div className="relative text-center mb-8">
          <div className="flex justify-center items-center gap-2 text-3xl font-extrabold text-gray-800">
            <span className="text-blue-600">💱</span>
            Currency Exchange
          </div>

          <p className="mt-2 text-sm text-gray-500">
            Convert currencies in real time using live exchange rates
          </p>
        </div>

        {/* Converter */}
        <CurrencyConverter />
      </div>
    </div>
  );
}

export default App;
