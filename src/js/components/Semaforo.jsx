import React, { useState } from 'react';

const Semaforo = () => {
  const [color, setColor] = useState("rojo");

  return (
    <div className="semaforo">
        <div className={`luz roja ${color === "roja" ? "selected" : ""}`} onClick={() => setColor("roja")}> </div>
        <div className={`luz amarilla ${color === "amarilla" ? "selected" : ""}`} onClick={() => setColor("amarilla")}> </div>
      <div className={`luz verde ${color === "verde" ? "selected" : ""}`} onClick={() => setColor("verde")}> </div>
    </div>
  );
};

export default Semaforo;


