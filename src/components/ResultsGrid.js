import React from "react";

const ResultsGrid = ({ results }) => {
  function formatDate(date) {
    const year = date.getFullYear();

    let month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : `0${month}`;

    let day = date.getDate().toString();
    day = day.length > 1 ? day : `0${day}`;

    return month + "/" + day + "/" + year;
  }

  return (
    <ul className="resultgrid">
      <li>
        <span>
          <strong>Date</strong>
        </span>
        <span>
          <strong>Venue</strong>
        </span>
        <span>
          <strong>Team A</strong>
        </span>
        <span>
          <strong>Team B</strong>
        </span>
        <span>
          <strong>Winner</strong>
        </span>
      </li>
      {results.map(result => {
        const {
          venue,
          fifa_id,
          home_team_country: teamA,
          away_team_country: teamB,
          winner,
          datetime
        } = result;

        return (
          <ResultRow
            key={fifa_id}
            date={formatDate(new Date(datetime))}
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

const ResultRow = ({ date, venue, teamA, teamB, winner }) => {
  return (
    <li>
      <span>{date}</span>
      <span>{venue}</span>
      <span>{teamA}</span>
      <span>{teamB}</span>
      <span>{winner}</span>
    </li>
  );
};

export default ResultsGrid;
