import React from "react";
import HouseCard from "../components/HouseCard";
import { useState } from "react";

const teams = {
  gryffindor: {
    captain: "Marek O",
    head: "Lucka L",
    score: 43.75,
    members: [
      "Marti V",
      "Honza P",
      "Marcel H",
      "Adam O",
      "Míša K",
      "Petr J",
      "Adam J",
      "Petr N",
      "Val S",
      "Soňa K",
      "Radka F",
      "Vojta K",
    ],
  },
  ravenclaw: {
    captain: "Kelli",
    head: "Honza Bubík",
    score: 41.25,
    members: [
      "Hanuš",
      "Honza P",
      "Marek T",
      "Mikuláš K",
      "Nicole D",
      "Tony F",
      "Mihai",
      "Clubo",
      "Markéta D",
      "Lucie F",
      "Kačka K",
      "Míša M",
      "Nikola H",
      "Maren",
      "Míša K",
      "Kuba K",
      "Oleh",
      "Terka C",
      "Mira H",
    ],
  },
  slytherin: {
    captain: "Barča S",
    head: "Vojta P",
    score: 37.25,
    members: [
      "Adél K",
      "Roman F",
      "Filip H",
      "Týna V",
      "Edit",
      "Michal K",
      "Barča H",
      "Honza EL",
      "Denča L",
      "Hung Le",
      "Róbert M",
      "Ondra Š",
      "Tomas I",
    ],
  },
  hufflepuff: {
    captain: "Oci",
    head: "Vlaďka",
    score: 36,
    members: [
      "Ondra S",
      "Klára K",
      "Vláďa D",
      "Šárka H",
      "Julie P",
      "Tom S",
      "Anička R",
      "Vašek K",
      "Klára T",
      "Viktor S",
      "Tonda CH",
      "Honza S",
    ],
  },
};

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center p-10">
      {/* Grid kolejí */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {Object.entries(teams).map(
          ([house, { captain, head, members, score }]) => (
            <HouseCard
              key={house}
              house={house}
              captain={captain}
              head={head}
              members={members}
              score={score}
              isOpen={isOpen} // Předáváme globální stav
            />
          )
        )}
      </div>
    </div>
  );
};

export default App;
