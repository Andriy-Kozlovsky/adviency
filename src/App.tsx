import React, {useState} from "react";

import "./styles.css";

export default function App() {
  const [list] = useState(["Medias", "Caramelos", "Vitel Tone"]);

  return (
    <div className="App">
      <div className="gifts">
        <h1>Regalos:</h1>
        <ul>
          {list.map((gift) => (
            <li key={gift}>{gift}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
