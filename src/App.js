
import "./styles.css";
import Webpage from "./webpage";
import { sculptureList } from "./data.js";

export default function App() {
  return (
    <div className="App">
      <Webpage sculptureList={sculptureList} />
    </div>
  );
}