import React from "react";
import { useState } from "react";
export function Drinkers({ person }) {
  return (
    <ul className="list-unstyled border p-3 rounded-3 shadow-lg">
      <li>Boil {person} cups of water.</li>
      <li>
        Add {person} spoons of tea and {0.5 * person} spoons of spice.
      </li>
      <li>Add {0.5 * person} cups of milk to boil and sugar to taste.</li>
    </ul>
  );
}

const ComponentPure = () => {

  let [count, setCount] = useState(1);

  function increase() {
    setCount(count + 1);
    return;
  }

  function decrease(){
    setCount(count-1);
    return
  }

  return (
    <div className="d-flex justify-content-center col-md-6">
      <div>
        <h3>For 2 person</h3>
        <Drinkers person={2} />
        <h3>For 4 person</h3>
        <Drinkers person={4} />

        <h3>For {count} person</h3>
        <Drinkers person={count} />
        <button onClick={increase} className="bg-success border-0 px-4 text-white"  type="submit">
          Add
        </button>
        <button onClick={decrease} className="bg-success border-0 px-4 text-white mx-3"  type="submit">
          Sub
        </button>
      </div>
    </div>
  );
};

export default ComponentPure;
