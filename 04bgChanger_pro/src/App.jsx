import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("yellow");
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center p-5 m-4 rounded-lg inset-x-0 ">
          <div className="flex flex-wrap justify-center gap-5 shadow-amber-100 bg-amber-100 px-5 py-4 rounded-4xl">
            <button
              onClick={() => {
                setColor("red");
              }}
              className="outline-none px-5 py-3 rounded-full text-white shadow-xl"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => {
                setColor("green");
              }}
              className="outline-none px-5 py-3 rounded-full text-white shadow-2xl"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button
              onClick={() => {
                setColor("black");
              }}
              className="outline-none px-5 py-3 rounded-full text-white shadow-2xl"
              style={{ backgroundColor: "black" }}
            >
              Black
            </button>
            <button
              onClick={() => {
                setColor("white");
              }}
              className="outline-none px-5 py-3 rounded-full text-black shadow-2xl"
              style={{ backgroundColor: "white" }}
            >
              White
            </button>
            <button
              onClick={() => {
                setColor("pink");
              }}
              className="outline-none px-5 py-3 rounded-full text-white shadow-2xl"
              style={{ backgroundColor: "pink" }}
            >
              Pink
            </button>
            <button
              onClick={() => {
                setColor("blue");
              }}
              className="outline-none px-5 py-3 rounded-full text-white shadow-2xl"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
            <button
              onClick={() => {
                setColor("gray");
              }}
              className="outline-none px-5 py-3 rounded-full text-white shadow-2xl"
              style={{ backgroundColor: "gray" }}
            >
              Gray
            </button>
            <button
              onClick={() => {
                setColor("olive");
              }}
              className="outline-none px-5 py-3 rounded-full text-white shadow-2xl"
              style={{ backgroundColor: "olive" }}
            >
              Olive
            </button>
            <button
              onClick={() => setColor("salmon")}
              className="outline-none px-5 py-3 rounded-full text-fuchsia-50 shadow-2xl"
              style={{ backgroundColor: "salmon" }}
            >
              Salmon
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
