import React from "react";

const ResultsGrid = ({ results }) => {
  return (
    <ul className="resultgrid">
      {results.map(result => {
        const {
          venue,
          fifa_id,
          home_team_country: teamA,
          away_team_country: teamB,
          winner
        } = result;

        return (
          <ResultRow
            key={fifa_id}
            venue={venue}
            teamA={teamA}
            teamB={teamB}
            winner={winner === "Draw" ? "Match draw" : `${winner} won`}
          />
        );
      })}
    </ul>
  );
};

const ResultRow = ({ venue, teamA, teamB, winner }) => {
  return (
    <li>
      <span>{venue}</span>
      <span>{teamA}</span>
      <span>{teamB}</span>
      <span>{winner}</span>
    </li>
  );
};

export default ResultsGrid;
