import "./App.css";
import { Card } from "./components/Card";

function App() {
  return (
    <>
      <h1 class="text-3xl font-bold bg-amber-600 hover:bg-amber-900 rounded-2xl p-4 cursor-pointer">
        Hello world!
      </h1>
      <Card username="Chaitanya" />
    </>
  );
}

export default App;
