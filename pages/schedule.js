import React, { useState } from "react";
import { ClockIcon, ChevronDownIcon } from "@heroicons/react/24/solid";

const scheduleData = [
  {
    time: "9:15",
    heat: 1,
    nebelvir: ["Radka F"],
    zmijozel: ["Barča H"],
    havraspar: ["Mira"],
    mrzimor: ["Vláďa D"],
  },
  {
    time: "9:38",
    heat: 2,
    nebelvir: ["Honza P"],
    zmijozel: ["Adél"],
    havraspar: ["Nicole"],
    mrzimor: ["Tom S"],
  },
  {
    time: "10:01",
    heat: 3,
    nebelvir: ["Petr N"],
    zmijozel: ["Tina"],
    havraspar: ["Mikuláš"],
    mrzimor: ["Ondra S"],
  },
  {
    time: "10:24",
    heat: 4,
    nebelvir: ["Marti"],
    zmijozel: ["Baru S"],
    havraspar: ["Hanuš"],
    mrzimor: ["Oci"],
  },
  {
    time: "10:47",
    heat: 5,
    nebelvir: ["Lucí"],
    zmijozel: ["Filip"],
    havraspar: ["Oleh"],
    mrzimor: ["Vlaďka"],
  },
  {
    time: "11:10",
    heat: 6,
    nebelvir: ["Marek O"],
    zmijozel: ["Edit"],
    havraspar: ["Marek T"],
    mrzimor: ["Anička"],
  },
  {
    time: "11:33",
    heat: 7,
    nebelvir: ["Míša K"],
    zmijozel: ["Michal K"],
    havraspar: ["Mihai"],
    mrzimor: ["Tonda"],
  },
  {
    time: "11:56",
    heat: 8,
    nebelvir: ["Adam O"],
    zmijozel: ["Vojta P"],
    havraspar: ["Clubo"],
    mrzimor: ["Klára K"],
  },
  {
    time: "12:19",
    heat: 9,
    nebelvir: ["Marcel"],
    zmijozel: ["Hung"],
    havraspar: ["Kačka K"],
    mrzimor: ["Klára T"],
  },
  {
    time: "12:42",
    heat: 10,
    nebelvir: ["Vojta K"],
    zmijozel: ["Ondra"],
    havraspar: ["Markéta"],
    mrzimor: ["Honza S"],
  },
  {
    time: "13:05",
    heat: 11,
    nebelvir: ["Soňa"],
    zmijozel: ["Tomáš I"],
    havraspar: ["Nikola H"],
    mrzimor: ["Viktor S"],
  },
  {
    time: "13:28",
    heat: 12,
    nebelvir: ["Val"],
    zmijozel: ["Míša K"],
    havraspar: ["Míša M"],
    mrzimor: ["Vašek K"],
  },
  {
    time: "13:51",
    heat: 13,
    nebelvir: ["Petr J"],
    zmijozel: [],
    havraspar: ["Maren", "Kuba K"],
    mrzimor: ["Klára S"],
  },
  {
    time: "14:14",
    heat: 14,
    nebelvir: ["Adam J"],
    zmijozel: [],
    havraspar: ["Terka C"],
    mrzimor: [],
  },
];

const teams = {
  nebelvir: {
    name: "Nebelvír",
    icon: "🏅",
  },
  zmijozel: {
    name: "Zmijozel",
    icon: "🐍",
  },
  havraspar: {
    name: "Havraspár",
    icon: "🦅",
  },
  mrzimor: {
    name: "Mrzimor",
    icon: "🦡",
  },
};

const Schedule = () => {
  const [selectedAthlete, setSelectedAthlete] = useState("");

  const filteredTimeline = selectedAthlete
    ? scheduleData.filter((row) =>
        Object.values(row).flat().includes(selectedAthlete)
      )
    : scheduleData;

  return (
    <div className="flex flex-col items-center min-h-screen text-white p-1 md:p-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
        Rozpis 25.3
      </h1>
      <div className="w-full max-w-lg mb-6 bg-gray-800 p-4 rounded-lg text-center">
        <p className="text-lg">
          🗣️ <span className="font-semibold">Briefing:</span> 8:45
        </p>
        <p className="text-lg">
          📸 <span className="font-semibold">Fotka:</span> 9:00
        </p>
      </div>
      {/* Workout info - sbalitelný prvek */}
      <div className="w-full max-w-lg mb-6">
        <details className="collapse bg-gray-800 rounded-lg group">
          <summary className="collapse-title text-xl font-bold cursor-pointer flex justify-between items-center relative">
            🏋️ Workout of the Day
            <ChevronDownIcon className="w-6 h-6 absolute right-4 top-1/2 transform -translate-y-1/2 transition-transform duration-300 group-open:rotate-180" />
          </summary>
          <div className="collapse-content p-4">
            <p className="text-lg font-semibold">For time:</p>
            <ul className="list-disc list-inside text-lg mb-4">
              <li>5 (scaled) wall walks</li>
              <li>50-calorie row</li>
              <li>5 (scaled) wall walks</li>
              <li>25 deadlifts</li>
              <li>5 (scaled) wall walks</li>
              <li>25 cleans</li>
              <li>5 (scaled) wall walks</li>
              <li>25 snatches</li>
              <li>5 (scaled) wall walks</li>
              <li>50-calorie row</li>
            </ul>
            <p className="text-lg font-semibold">⏳ Time cap: 20 minutes</p>

            {/* RX Weights */}
            <div className="mt-4">
              <p className="text-lg font-bold text-yellow-300">
                🔥 RX Weights:
              </p>
              <p className="text-md">
                ♀ 155-lb (70-kg) deadlift, 85-lb (38-kg) clean, 65-lb (29-kg)
                snatch
              </p>
              <p className="text-md">
                ♂ 225-lb (102-kg) deadlift, 135-lb (61-kg) clean, 95-lb (43-kg)
                snatch
              </p>
            </div>

            {/* Scaled Weights */}
            <div className="mt-4">
              <p className="text-lg font-bold text-blue-300">
                ⚡ Scaled Weights:
              </p>
              <p className="text-md">
                ♀ 95-lb (43-kg) deadlift, 55-lb (25-kg) clean, 35-lb (16-kg)
                snatch
              </p>
              <p className="text-md">
                ♂ 135-lb (61-kg) deadlift, 95-lb (43-kg) clean, 65-lb (29-kg)
                snatch
              </p>
            </div>
          </div>
        </details>
      </div>

      {/* Filtr závodníků */}
      <div className="w-full max-w-lg mb-4">
        <label className="block text-center mb-2 text-lg">
          Filtr podle závodníka:
        </label>
        <select
          className="bg-gray-700 text-white p-2 w-full rounded text-center"
          onChange={(e) => setSelectedAthlete(e.target.value)}
        >
          <option value="">Všichni závodníci</option>
          {["Nebelvír", "Zmijozel", "Havraspár", "Mrzimor"].map((team) => (
            <optgroup key={team} label={team}>
              {scheduleData
                .flatMap(
                  (row) =>
                    ({
                      Nebelvír: row.nebelvir,
                      Zmijozel: row.zmijozel,
                      Havraspár: row.havraspar,
                      Mrzimor: row.mrzimor,
                    }[team])
                )
                .filter((v, i, a) => a.indexOf(v) === i) // Odstranění duplicit
                .sort() // Seřazení jmen podle abecedy
                .map((name, index) => (
                  <option key={index} value={name}>
                    {name}
                  </option>
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
              <th className="border border-gray-500 px-2 md:px-4 py-2">
                Nebelvír
              </th>
              <th className="border border-gray-500 px-2 md:px-4 py-2">
                Zmijozel
              </th>
              <th className="border border-gray-500 px-2 md:px-4 py-2">
                Havraspár
              </th>
              <th className="border border-gray-500 px-2 md:px-4 py-2">
                Mrzimor
              </th>
            </tr>
          </thead>
          <tbody>
            {scheduleData.map((row, index) => (
              <tr key={index} className="hover:bg-gray-800">
                <td className="border border-gray-500 px-2 md:px-4 py-2">
                  {row.time}
                </td>
                {["nebelvir", "zmijozel", "havraspar", "mrzimor"].map(
                  (team, idx) => (
                    <td
                      key={idx}
                      className={`border border-gray-500 px-2 md:px-4 py-2 ${
                        row[team].includes(selectedAthlete)
                          ? "bg-yellow-500 text-black font-bold"
                          : ""
                      }`}
                    >
                      {row[team].join(", ")}
                    </td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Timeline */}
      <div className="w-full max-w-4xl mt-10 bg-gray-800 p-4 rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-4">⏳ Časová osa</h2>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          {filteredTimeline.map((row, index) => (
            <li key={index}>
              <div className="timeline-middle">
                <ClockIcon className="w-6 h-6" />
              </div>
              <div
                className={`timeline-${
                  index % 2 === 0 ? "end" : "start"
                } p-2 md:text-${index % 2 === 0 ? "end" : "start"}`}
              >
                <time className="font-mono italic">{`HEAT ${row.heat}`}</time>
                <div className="text-lg font-black">{row.time}</div>
                {["nebelvir", "zmijozel", "havraspar", "mrzimor"].map(
                  (team, idx) =>
                    row[team].length > 0
                      ? row[team].map((name, idx) => (
                          <p key={idx} className="text-sm">
                            {teams[team].icon} {name} ({teams[team].name})
                          </p>
                        ))
                      : ""
                  //   <p key={idx} className="text-sm">{row[team].length > 0 ? `${teams[team].icon} ${row[team].join(", ")}` : ""}</p>
                )}
              </div>
              <hr />
            </li>
          ))}
        </ul>
      </div>
      {/* Workout info - sbalitelný prvek */}
    </div>
  );
};

export default Schedule;
