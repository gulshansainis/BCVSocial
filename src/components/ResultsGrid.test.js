import React from "react";
import renderer from "react-test-renderer";
import ResultsGrid from "./ResultsGrid";

it("renders correctly", () => {
  const data = [
    {
      venue: "Valenciennes",
      fifa_id: "300438227",
      home_team_country: "Australia",
      away_team_country: "Italy",
      datetime: "2019-06-09T23:00:00Z",
      winner: "Italy",
      winner_code: "ITA"
    }
  ];
  const tree = renderer.create(<ResultsGrid results={data} />).toJSON();
  expect(tree).toMatchSnapshot();
});
