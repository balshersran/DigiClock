import Clock from "./Components/clock";
import "./index.css";

function App() {
  return (
    <>
      <div className="container mw-auto p-48 height-auto">
        <div className="max-w-sm rounded overflow-hidden shadow-2xl bg-teal-200">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-center">digiClock</div>
            <p>
              <Clock />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
