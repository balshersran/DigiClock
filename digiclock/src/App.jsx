
import Clock from "./Components/clock";
import "./index.css";

function App() {
  return (
    <>
      <div className="container mw-auto px-4 height-auto flex flex-col justify-center items-center align-center">
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-teal-200">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-center">digiClock</div>
              <p>
              <Clock/>
              </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #month
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #day
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #year
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
