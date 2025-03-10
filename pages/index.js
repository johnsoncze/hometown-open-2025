import React from "react";
import HouseCard from "../components/HouseCard";
import { useState } from "react";
import data from "../final_results.json";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center p-10">
      {/* Grid kolejí */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {Object.entries(data).sort(
          ([, { score: scoreA }], [, { score: scoreB }]) => scoreB - scoreA
        ).map(
          ([house, { name, captain, head, members, score }]) => (
            <HouseCard
              key={house}
              house={house}
              captain={captain}
              head={head}
              members={members}
              score={score}
              isOpen={isOpen}
            />
          )
        )}
      </div>
    </div>
  );
};

export default App;
