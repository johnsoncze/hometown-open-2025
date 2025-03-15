import React from "react";
import data from "../../final_results.json";
import { useRouter } from "next/router";
import { AcademicCapIcon, TrophyIcon, CakeIcon } from "@heroicons/react/24/outline";

const rounds = {
  1: "25.1",
  2: "25.2",
  3: "25.3",
};

const Results = () => {
  const router = useRouter();
  const { round } = router.query;

  const allCompetitors = Object.entries(data).flatMap(([house, team]) =>
    team.members.map((member) => {
      return {
        name: member.name,
        score: Object.values(member.results).reduce((acc, { points, positionPoints }) => acc + points + (positionPoints ?? 0), 0),
        house: team.house,
      };
    })
  ).sort((a, b) => b.score - a.score);

  return (
    <div className="flex flex-col items-center min-h-screen text-white w-full max-w-screen-lg">
      <div role="tablist" className="tabs bg-slate-800 p-0 md:p-2 mt-0 w-full">
        <a href="/results" role="tab" className="tab tab-active">
            Celkem
        </a>
        <div className="tab-content w-full">
                <h1 className="text-4xl font-bold mb-6 mt-6 text-center">🏆 Výsledky 🏆</h1>

                <div className="w-full max-w-screen-lg">
                  {Object.entries(data).map(([house, team]) => (
                    <div key={house} className={`rounded-lg shadow-lg p-2 mb-6 ${team.color}`}>
                      <h2 className="text-2xl font-bold text-center uppercase">{team.house}</h2>
                      <p className="text-center text-3xl font-bold mt-4">
                  Body: {team.score}
                </p>
                <div className="mt-4 bg-gray-800 p-2 rounded-lg">
                  <h3 className="text-lg font-bold">Extra body:</h3>
                  <p><AcademicCapIcon className="w-5 h-5 inline text-info" /> Judgování: {team.extraPoints.judging} bodů</p>
                  <p>
                    <TrophyIcon className="w-5 h-5 inline text-info" /> Oficiální přihlášky: {team.extraPoints.officialEntries} bodů
                  </p>
                  <p><CakeIcon className="w-5 h-5 inline text-info" /> Občerstvení: {team.extraPoints.refreshment} bodů</p>
                </div>

                      {/* Tabulka výsledků jednotlivých účastníků */}
                      <div className="mt-4 bg-gray-700 p-2 rounded-lg w-full">
                        <h3 className="text-lg font-bold">📋 Individuální výsledky</h3>
                        <div className="w-full overflow-x-auto"> {/* Skrolovatelná tabulka */}
                          <table className="w-full text-left mt-2 border-collapse border border-gray-500">
                            <thead>
                              <tr className="bg-gray-600 text-white">
                                <th className="border border-gray-500 px-4 py-2">Jméno</th>
                                <th className="border border-gray-500 px-4 py-2">Body 25.1</th>
                                <th className="border border-gray-500 px-4 py-2">Body 25.2</th>
                                <th className="border border-gray-500 px-4 py-2">Body celkem</th>
                              </tr>
                            </thead>
                            <tbody>
                              {team.members.map((member, idx) => (
                                <tr key={idx} className="hover:bg-gray-800">
                                  <td className="border border-gray-500 px-4 py-2">{member.name}</td>
                                  <td className="border border-gray-500 px-4 py-2 text-right">{member.results[1].points + (member.results[1].positionPoints ?? 0)}</td>
                                  <td className="border border-gray-500 px-4 py-2 text-right">{member.results[2].points + (member.results[2].positionPoints ?? 0)}</td>
                                  <td className="border border-gray-500 px-4 py-2 text-right">
                                    {member.results[1].points + (member.results[1].positionPoints ?? 0) + member.results[2].points + (member.results[2].positionPoints ?? 0)}
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
                <div>
                <div className="mt-10 w-full max-w-screen-lg bg-gray-800 p-1 rounded-lg shadow-lg">
                  <h3 className="text-lg font-bold">🏆 Umístění
                  </h3>
                  <div className="w-full overflow-x-auto">
                    <table className="w-full text-left mt-2 border-collapse border border-gray-500">
                      <thead>
                        <tr className="bg-gray-600 text-white">
                          <th className="border border-gray-500 px-4 py-2">Pořadí</th>
                          <th className="border border-gray-500 px-4 py-2">Jméno</th>
                          <th className="border border-gray-500 px-4 py-2">Kolej</th>
                          <th className="border border-gray-500 px-4 py-2">Body</th>
                        </tr>
                      </thead>
                      <tbody>
                        {allCompetitors.map((competitor, idx) => (
                          <tr key={idx} className="hover:bg-gray-800">
                            <td className="border border-gray-500 px-4 py-2">{idx + 1}.</td>
                            <td className="border border-gray-500 px-4 py-2">{competitor.name}</td>
                            <td className="border border-gray-500 px-4 py-2">{competitor.house}</td>
                            <td className="border border-gray-500 px-4 py-2">{competitor.score}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>

                </div>
              </div>
                </div>
              </div>
        {Object.keys(rounds).map((key) => (
          <React.Fragment key={key}>
            <a href={`/results/${key}`} role="tab" className={`tab`}>
              {rounds[key]}
            </a>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Results;
