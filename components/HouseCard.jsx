import React, { useState } from "react";

const houseStyles = {
    gryffindor: {
      name: "Nebelvír",
      color: "bg-red-900",
      border: "border-silver",
      emblem: "/images/gryffindor.png",
    },
    slytherin: {
      name: "Zmijozel",
      color: "bg-green-900",
      border: "border-silver",
      emblem: "/images/slytherin.png",
    },
    hufflepuff: {
      name: "Mrzimor",
      color: "bg-yellow-500",
      border: "border-silver",
      emblem: "/images/hufflepuff.png",
    },
    ravenclaw: {
      name: "Havraspár",
      color: "bg-blue-900",
      border: "border-silver",
      emblem: "/images/ravenclaw.png",
    },
  };

const HouseCard = ({ house, captain, head, members, score }) => {
  const { name, color, border, emblem } = houseStyles[house] || houseStyles.gryffindor;
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative w-full h-80 cursor-pointer" 
      onClick={() => setIsFlipped(!isFlipped)}
      style={{ perspective: "1000px" }}
    >
      {/* Kontejner pro rotaci */}
      <div 
        className={`relative w-full h-full transition-transform duration-700 transform ${isFlipped ? "rotate-y-180" : ""}`}
      >
        {/* Přední strana */}
        <div 
          className={`absolute w-full h-full ${color} ${border} border-4 shadow-lg p-6 rounded-lg text-white transition-opacity duration-700 ${isFlipped ? "opacity-0" : "opacity-100"}`}
          style={{ transform: "rotateY(0deg)" }}
        >
          <img src={emblem} alt={`${name} Emblem`} className="h-24 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-center uppercase">{name}</h2>
          <p className="text-center text-3xl font-bold mt-2">🏆 {score} bodů</p>
          <p className="text-center text-lg font-semibold mt-2">
            <span className="text-yellow-50">{head}</span> – Vedoucí koleje
          </p>
          <p className="text-center text-lg font-semibold text-amber-200 mt-1">
            {captain} – Kapitán týmu
          </p>
        </div>

        {/* Zadní strana (scrollovatelná) */}
        <div 
          className={`absolute w-full h-full ${color} ${border} border-4 shadow-lg p-6 rounded-lg text-white transition-opacity duration-700 overflow-hidden ${isFlipped ? "opacity-100" : "opacity-0"}`}
          style={{ transform: "rotateY(180deg)" }}
        >
          <h2 className="text-xl font-bold text-center mb-2">Členové týmu</h2>
          
          {/* Scrollovatelný seznam členů */}
          <div className="h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-600 p-2">
            <ul className="text-center space-y-1">
              {members.map((member, index) => (
                <li key={index} className="text-lg">{member}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseCard;
