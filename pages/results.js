import React from "react";

const teamData = [
    {
        house: "Nebelvír",
        color: "bg-red-900",
        captain: "Marek O",
        head: "Lucka L",
        score: 43.75,
        extraPoints: { judging: 3.25, officialEntries: 3, refreshment: 4.5 },
        members: [
            { name: "Marek O", result: 189, rxsc: "RX", points: 1 },
            { name: "Lucka L", result: 222, rxsc: "RX", points: 5 },
            { name: "Marti V", result: 206, rxsc: "SC", points: 1},
            { name: "Honza P", result: 138, rxsc: "SC", points: 1 },
            { name: "Marcel H", result: 130, rxsc: "SC", points: 1 },
            { name: "Adam O", result: 240, rxsc: "RX", points: 5 },
            { name: "Míša K", result: 171, rxsc: "SC", points: 1 },
            { name: "Petr J", result: 206, rxsc: "RX", points: 3 },
            { name: "Adam J", result: 234, rxsc: "RX", points: 4 },
            { name: "Petr N", result: 184, rxsc: "RX", points: 1 },
            { name: "Val S", result: 184, rxsc: "SC", points: 1 },
            { name: "Soňa K", result: 138, rxsc: "SC", points: 1 },
            { name: "Radka F", result: 166, rxsc: "SC", points: 1 },
            { name: "Vojta K", result: 144, rxsc: "RX", points: 1 },
        ],
    },
    {
        house: "Havraspár",
        color: "bg-blue-900",
        captain: "Kelli",
        head: "Honza Bubík",
        score: 41.25,
        extraPoints: { judging: 2.75, officialEntries: 5, refreshment: 4.5 },
        members: [
                { name: "Kelli", result: 175, rxsc: "SC", points: 1 },
                { name: "Hanuš", result: 136, rxsc: "RX", points: 1 },
                { name: "Honza P", result: "omluva", rxsc: null, points: 0 },
                { name: "Marek T", result: "omluva", rxsc: null, points: 0 },
                { name: "Mikuláš K", result: 201, rxsc: "RX", points: 1 },
                { name: "Nicole D", result: 191, rxsc: "SC", points: 1 },
                { name: "Tony F", result: 167, rxsc: "RX", points: 1 },
                { name: "Mihai", result: 134, rxsc: "RX", points: 1 },
                { name: "Clubo", result: 202, rxsc: "RX", points: 1 },
                { name: "Markéta D", result: 205, rxsc: "SC", points: 3 },
                { name: "Lucie F", result: null, rxsc: null, points: -1 },
                { name: "Kačka K", result: 154, rxsc: "SC", points: 1 },
                { name: "Míša M", result: 125, rxsc: "SC", points: 1 },
                { name: "Nikola H", result: 169, rxsc: "SC", points: 1 },
                { name: "Maren", result: 182, rxsc: "SC", points: 1 },
                { name: "Míša K", result: 239, rxsc: "SC", points: 4 },
                { name: "Kuba K", result: 161, rxsc: "SC", points: 1 },
                { name: "Oleh", result: 182, rxsc: "RX", points: 1 },
                { name: "Terka C", result: 222, rxsc: "SC", points: 0 },
                { name: "Mira H", result: 161, rxsc: "RX", points: 0 },
            ],
    },
    {
        house: "Zmijozel",
        color: "bg-green-900",
        captain: "Barča S",
        head: "Vojta P",
        score: 37.25,
        extraPoints: { judging: 4.25, officialEntries: 3, refreshment: 3.5 },
        members: [
                { name: "Barča S", result: 165, rxsc: "RX", points: 1 },
                { name: "Vojta P", result: 248, rxsc: "RX", points: 6 },
                { name: "Adél K", result: 148, rxsc: "RX", points: 1 },
                { name: "Roman F", result: "omluva", rxsc: null, points: 0 },
                { name: "Filip H", result: 206, rxsc: "RX", points: 4 },
                { name: "Týna V", result: 202, rxsc: "SC", points: 2 },
                { name: "Edit", result: 220, rxsc: "RX", points: 4 },
                { name: "Michal K", result: 203, rxsc: "RX", points: 1 },
                { name: "Barča H", result: 141, rxsc: "RX", points: 1 },
                { name: "Honza EL", result: 201, rxsc: "RX", points: 1 },
                { name: "Denča L", result: 181, rxsc: "RX", points: 1 },
                { name: "Hung Le", result: 161, rxsc: "RX", points: 1 },
                { name: "Róbert M", result: 142, rxsc: "SC", points: 1 },
                { name: "Ondra Š", result: 182, rxsc: "SC", points: 2 },
                { name: "Tomas I", result: 160, rxsc: "RX", points: 1 },
        ],
    },
    {
        house: "Mrzimor",
        color: "bg-yellow-500",
        captain: "Oci",
        head: "Vlaďka",
        score: 36,
        extraPoints: { judging: 3, officialEntries: 5, refreshment: 3 },
        members: [
                { name: "Oci", result: 132, rxsc: "RX", points: 1 },
                { name: "Vlaďka", result: 229, rxsc: "RX", points: 6 },
                { name: "Ondra S", result: 157, rxsc: "RX", points: 1 },
                { name: "Klára K", result: 212, rxsc: "RX", points: -1 },
                { name: "Vláďa D", result: 168, rxsc: "RX", points: 1 },
                { name: "Šárka H", result: "omluva", rxsc: null, points: 0 },
                { name: "Julie P", result: 116, rxsc: "SC", points: 1 },
                { name: "Tom S", result: 151, rxsc: "SC", points: 1 },
                { name: "Anička R", result: 207, rxsc: "RX", points: 1 },
                { name: "Vašek K", result: 186, rxsc: "RX", points: 1 },
                { name: "Klára T", result: 188, rxsc: "RX", points: 1 },
                { name: "Viktor S", result: 192, rxsc: "RX", points: 1 },
                { name: "Tonda CH", result: "omluva", rxsc: null, points: 0 },
                { name: "Honza S", result: 149, rxsc: "SC", points: 1 },
        ],
    },
];

const Results = () => {
  return (
    <div className="flex flex-col items-center min-h-screen text-white p-4">
      <h1 className="text-4xl font-bold mb-6">🏆 Výsledky 25.1 🏆</h1>

      <div className="w-full max-w-4xl">
        {teamData.map((team, index) => (
          <div key={index} className={`rounded-lg shadow-lg p-2 mb-6 ${team.color}`}>
            <h2 className="text-2xl font-bold text-center uppercase">{team.house}</h2>
            <p className="text-center text-lg">
              👑 <span className="font-semibold">{team.head}</span> – Vedoucí koleje
            </p>
            <p className="text-center text-lg text-yellow-300">
              🏆 {team.captain} – Kapitán týmu
            </p>
            <p className="text-center text-3xl font-bold mt-4">Body: {team.score}</p>

            {/* Extra body */}
            <div className="mt-4 bg-gray-800 p-2 rounded-lg">
              <h3 className="text-lg font-bold">Extra body:</h3>
              <p>🔹 Hodnocení: {team.extraPoints.judging} bodů</p>
              <p>🔹 Oficiální přihlášky: {team.extraPoints.officialEntries}x3</p>
              <p>🔹 Občerstvení: {team.extraPoints.refreshment} bodů</p>
            </div>

            {/* Tabulka výsledků jednotlivých účastníků */}
            <div className="mt-4 bg-gray-700 p-2 rounded-lg">
              <h3 className="text-lg font-bold">📋 Individuální výsledky</h3>
            <div className="w-full max-w-4xl overflow-x-auto">
              <table className="w-full text-left mt-2 border-collapse border border-gray-500">
                <thead>
                  <tr className="bg-gray-600 text-white">
                    <th className="border border-gray-500 px-4 py-2">Jméno</th>
                    <th className="border border-gray-500 px-4 py-2">Výsledek</th>
                    <th className="border border-gray-500 px-4 py-2">RX/SC</th>
                    <th className="border border-gray-500 px-4 py-2">Body</th>
                  </tr>
                </thead>
                <tbody>
                  {team.members.map((member, idx) => (
                    <tr key={idx} className="hover:bg-gray-800">
                      <td className="border border-gray-500 px-4 py-2">{member.name}</td>
                      <td className="border border-gray-500 px-4 py-2">{member.result}</td>
                      <td className="border border-gray-500 px-4 py-2">{member.rxsc}</td>
                        <td className="border border-gray-500 px-4 py-2">{member.points}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Results;
