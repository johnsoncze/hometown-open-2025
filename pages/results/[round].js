import React from "react";
import data from "../../final_results.json";
import { useRouter } from "next/router";

const rounds = {
  1: "25.1",
  2: "25.2",
  3: "25.3",
};

const Results = () => {
  const router = useRouter();
  const { round } = router.query;
// Pomocná funkce na převod času TB M:SS nebo M:SS na sekundy
const timeToSeconds = (timeString) => {
  if (typeof timeString !== "string") return null;

  let isTB = false;
  if (timeString.startsWith("TB ")) {
    timeString = timeString.replace("TB ", "");
    isTB = true;
  }

  if (timeString.includes(":")) {
    const [minutes, seconds] = timeString.split(":").map(Number);
    return minutes * 60 + seconds + (isTB ? 10000 : 0); // TB časy dostanou vyšší hodnotu pro oddělení
  }

  return null; // Pokud není čas, vrátíme null
};

// Vytvoříme seznam závodníků se skóre pro dané kolo
const allCompetitors = Object.entries(data).flatMap(([house, team]) =>
  team.members.map((member) => {
    let result = member.results[round]?.result || 0;
    let points = result;
    let time = 12; // Výchozí hodnota pro čas v sekundách (defaultně 12)

    if (typeof result === "string") {
      if (result.startsWith("TB")) {
        time = timeToSeconds(result);
        points = 156;
      } else if (result.startsWith("omluva")) {
        time = timeToSeconds(result);
        points = -1;
      } else if (result.startsWith("nebyl")) {
        time = timeToSeconds(result);
        points = -2;
      } else {
        time = timeToSeconds(result);
        points = 216;
      }
    } else {
      time = 12; // Pokud je výsledek číslo, dáme defaultní čas
    }

    return {
      name: `${member.name} (${team.house[0]})`, // Přidáme kolej k jménu
      result: result,
      rxsc: member.results[round]?.rxsc || "SC",
      gender: member.gender || "Muži", // Výchozí hodnotu nastavíme na "Muži", pokud není definována
      positionPoints: member.results[round]?.positionPoints || 0,
      score: points,
      time: time, // Už uložený v sekundách
    };
  })
);

// Funkce na řazení podle score a času
const sortCompetitors = (a, b) => {
  if (b.score !== a.score) return b.score - a.score; // Primární řazení podle score (větší je lepší)
  return a.time - b.time; // Pokud je score stejné, seřadíme podle času (kratší je lepší)
};

// Rozdělení závodníků podle RX/SC/F a genderu
const categories = {
  "RX - Ženy": allCompetitors
    .filter((c) => c.rxsc === "RX" && c.gender === "F")
    .sort(sortCompetitors),
  "Scaled - Ženy": allCompetitors
    .filter((c) => c.rxsc === "SC" && c.gender === "F")
    .sort(sortCompetitors),
  "Foundation - Ženy": allCompetitors
    .filter((c) => c.rxsc === "F" && c.gender === "F")
    .sort(sortCompetitors),
  "RX - Muži": allCompetitors
    .filter((c) => c.rxsc === "RX" && c.gender === "M")
    .sort(sortCompetitors),
  "Scaled - Muži": allCompetitors
    .filter((c) => c.rxsc === "SC" && c.gender === "M")
    .sort(sortCompetitors),
  "Foundation - Muži": allCompetitors
    .filter((c) => c.rxsc === "F" && c.gender === "M")
    .sort(sortCompetitors),
};

  return (
    <div className="flex flex-col items-center min-h-screen text-white w-full max-w-screen-lg">
      <div role="tablist" className="tabs bg-slate-800 p-0 md:p-2 mt-0 w-full">
        <a href="/results" role="tab" className="tab">
          Celkem
        </a>
        {Object.keys(rounds).map((key) => (
          <React.Fragment key={key}>
            <a href={`/results/${key}`} role="tab" className={`tab ${round === key ? "tab-active" : ""} ${key == 3 ? "tab-disabled" : ""}`}>
              {rounds[key]}
            </a>
            {round === key && (
              <div className="tab-content w-full">
                <h1 className="text-4xl font-bold mb-6 mt-6 text-center">🏆 Výsledky {rounds[key]} 🏆</h1>

                <div className="w-full max-w-screen-lg">
                  {Object.entries(data).map(([house, team]) => (
                    <div key={house} className={`rounded-lg shadow-lg p-2 mb-6 ${team.color}`}>
                      <h2 className="text-2xl font-bold text-center uppercase">{team.house}</h2>
                      <p className="text-center text-3xl font-bold mt-4">
                        Body za kolo: {team.members.reduce((acc, member) => acc + member.results[round].points + (member.results[1].positionPoints ?? 0), 0)}
                      </p>

                      {/* Tabulka výsledků jednotlivých účastníků */}
                      <div className="mt-4 bg-gray-700 p-2 rounded-lg w-full">
                        <h3 className="text-lg font-bold">📋 Individuální výsledky</h3>
                        <div className="w-full overflow-x-auto"> {/* Skrolovatelná tabulka */}
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
                                  <td className="border border-gray-500 px-4 py-2">{member.results[round].result}</td>
                                  <td className="border border-gray-500 px-4 py-2">{member.results[round].rxsc}</td>
                                  <td className="border border-gray-500 px-4 py-2">
                                    {member.results[round].points + (member.results[round].positionPoints ?? 0)}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tabulka umístění podle RX/SC a genderu */}
                <div className="mt-10 w-full max-w-screen-lg bg-gray-800 p-1 rounded-lg shadow-lg">
                  <h2 className="text-2xl font-bold text-center mb-4">📊 Umístění podle kategorie</h2>

                  {Object.entries(categories).filter(([category, com]) => com.length > 0).map(([category, competitors]) => (
                    <div key={category} className="mt-6">
                      <h3 className="text-xl font-bold text-center bg-gray-700 p-2 rounded">{category}</h3>
                      <div className="w-full overflow-x-auto">
                        <table className="w-full text-left mt-2 border-collapse border border-gray-500">
                          <thead>
                            <tr className="bg-gray-600 text-white">
                              <th className="border border-gray-500 px-4 py-2">#</th>
                              <th className="border border-gray-500 px-4 py-2">Jméno (Kolej)</th>
                              <th className="border border-gray-500 px-4 py-2">Výsledek</th>
                              <th className="border border-gray-500 px-4 py-2">Body</th>
                            </tr>
                          </thead>
                          <tbody>
                            {competitors.map((competitor, index) => (
                              <tr key={index} className="hover:bg-gray-700">
                                <td className="border border-gray-500 px-4 py-2">{index + 1}.</td>
                                <td className="border border-gray-500 px-4 py-2">{competitor.name}</td>
                                <td className="border border-gray-500 px-4 py-2">{competitor.result}</td>
                                <td className="border border-gray-500 px-4 py-2">{competitor.positionPoints}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Results;
