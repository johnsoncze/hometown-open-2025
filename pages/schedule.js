import React, { useState } from "react";

const scheduleData = [
  { time: "9:15", heat: 1, nebelvir: "Val", zmijozel: "Honza EL", havraspar: "Míša H", mrzimor: "Vláďa D" },
  { time: "9:30", heat: 2, nebelvir: "Honza P", zmijozel: "Baru S", havraspar: "Kelli", mrzimor: "Julie P" },
  { time: "9:45", heat: 3, nebelvir: "Marti", zmijozel: "Adél K", havraspar: "Marek", mrzimor: "Vlaďka" },
  { time: "10:00", heat: 4, nebelvir: "Petr N", zmijozel: "Ondra", havraspar: "Terka C", mrzimor: "Oci" },
  { time: "10:15", heat: 5, nebelvir: "Adam O", zmijozel: "Vojta P", havraspar: "Míša K", mrzimor: "Ondra S" },
  { time: "10:30", heat: 6, nebelvir: "Míša K", zmijozel: "Barča H", havraspar: "Hanus", mrzimor: "Šárka H" },
  { time: "10:45", heat: 7, nebelvir: "Mara O", zmijozel: "Tomáš I", havraspar: "Marek T", mrzimor: "Tom S" },
  { time: "11:00", heat: 8, nebelvir: "Lucka L", zmijozel: "Tina V", havraspar: "Mihai", mrzimor: "Anička" },
  { time: "11:15", heat: 9, nebelvir: "Vojta K", zmijozel: "Filip", havraspar: "Nikola H", mrzimor: "Klára T" },
  { time: "11:30", heat: 10, nebelvir: "Marcel", zmijozel: "Denca", havraspar: "Kuba", mrzimor: "Tonda" },
  { time: "11:45", heat: 11, nebelvir: "Petr J", zmijozel: "Hung", havraspar: "Míša M", mrzimor: "Honza S" },
  { time: "12:00", heat: 12, nebelvir: "Adam J", zmijozel: "Edit", havraspar: "Oleh", mrzimor: "Viktor S" },
  { time: "12:15", heat: 13, nebelvir: "Soňa", zmijozel: "Michal K", havraspar: "Clubo", mrzimor: "Klára K" },
  { time: "12:30", heat: 14, nebelvir: "Marie", zmijozel: "Robert", havraspar: "Markét", mrzimor: "Vašek K" },
];

const Schedule = () => {
    const [selectedAthlete, setSelectedAthlete] = useState("");
  
    const filteredTimeline = selectedAthlete
      ? scheduleData.filter((row) => Object.values(row).includes(selectedAthlete))
      : scheduleData;
  
    return (
      <div className="flex flex-col items-center min-h-screen text-white p-4 md:p-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Rozpis 25.2</h1>
  
{/* Filtr závodníků */}
<div className="w-full max-w-lg mb-4">
  <label className="block text-center mb-2 text-lg">Filtr podle závodníka:</label>
  <select
    className="bg-gray-700 text-white p-2 w-full rounded text-center"
    onChange={(e) => setSelectedAthlete(e.target.value)}
  >
    <option value="">Všichni závodníci</option>
    {["Nebelvír", "Zmijozel", "Havraspár", "Mrzimor"].map((team) => (
      <optgroup key={team} label={team}>
        {scheduleData
          .flatMap((row) => ({
            Nebelvír: row.nebelvir,
            Zmijozel: row.zmijozel,
            Havraspár: row.havraspar,
            Mrzimor: row.mrzimor,
          }[team]))
          .filter((v, i, a) => a.indexOf(v) === i) // Odstranění duplicit
          .sort() // Seřazení jmen podle abecedy
          .map((name, index) => (
            <option key={index} value={name}>{name}</option>
          ))}
      </optgroup>
    ))}
  </select>
</div>
  
        {/* Tabulka rozpisu */}
        <div className="w-full max-w-4xl overflow-x-auto bg-gray-800">
          <table className="w-full text-left border-collapse border border-gray-500 text-sm md:text-base">
            <thead>
              <tr className="bg-gray-600 text-white">
                <th className="border border-gray-500 px-2 md:px-4 py-2">Čas</th>
                <th className="border border-gray-500 px-2 md:px-4 py-2">Nebelvír</th>
                <th className="border border-gray-500 px-2 md:px-4 py-2">Zmijozel</th>
                <th className="border border-gray-500 px-2 md:px-4 py-2">Havraspár</th>
                <th className="border border-gray-500 px-2 md:px-4 py-2">Mrzimor</th>
              </tr>
            </thead>
            <tbody>
              {scheduleData.map((row, index) => (
                <tr key={index} className="hover:bg-gray-800">
                  <td className="border border-gray-500 px-2 md:px-4 py-2">{row.time}</td>
                  {["nebelvir", "zmijozel", "havraspar", "mrzimor"].map((team, idx) => (
                    <td
                      key={idx}
                      className={`border border-gray-500 px-2 md:px-4 py-2 ${
                        row[team] === selectedAthlete ? "bg-yellow-500 text-black font-bold" : ""
                      }`}
                    >
                      {row[team]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  
        {/* Timeline */}
        <div className="w-full max-w-4xl mt-10">
          <h2 className="text-2xl font-bold text-center mb-4">⏳ Časová osa</h2>
          <div className="relative border-l-4 border-gray-500 ml-4">
            {filteredTimeline.map((row, index) => (
              <div key={index} className="mb-6 ml-4 md:ml-6">
                <div className="absolute -left-2 w-4 h-4 bg-yellow-400 rounded-full"></div>
                <p className="text-lg font-semibold">{row.time}</p>
                <p className="text-sm text-gray-400">{`HEAT ${row.heat}`}</p>
                <p className="text-sm">🏅 {row.nebelvir} (Nebelvír)</p>
                <p className="text-sm">🐍 {row.zmijozel} (Zmijozel)</p>
                <p className="text-sm">🦅 {row.havraspar} (Havraspár)</p>
                <p className="text-sm">🦡 {row.mrzimor} (Mrzimor)</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Schedule;
