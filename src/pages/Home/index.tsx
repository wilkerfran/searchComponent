import React from "react";
import { nflTeams } from "./data";

export const PageHome = () => {
  const [search, setSearch] = React.useState("");

  console.log(search);

  const searchLowerCase = search.toLowerCase();

  const teams = nflTeams.filter(
    (team) =>
      team.name.toLowerCase().includes(searchLowerCase) ||
      team.city.toLowerCase().includes(searchLowerCase) 
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "full",
        padding: "16px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "full",
          maxWidth: "600px",
          padding: "16px",
        }}
      >
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <ul
          style={{
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          {teams.map((team) => (
            <li
              key={team.name}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <img
                src={team.logoUrl}
                alt={`${team.city} ${team.name} logo`}
                style={{ width: "35em", height: "15em" }}
              />
              <p>{team.name}</p>
              {/* <p>{team.city}</p> */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
