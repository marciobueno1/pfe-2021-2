import React, { useState } from "react";
import { useQuery } from "react-query";
import { Person } from "../components/Person";

export function Home() {
  const [page, setPage] = useState(1);
  const handleAnteriorClick = () => {
    setPage(page - 1);
  };
  const handleProximaClick = () => {
    setPage(page + 1);
  };
  const { isLoading, error, data, isFetching } = useQuery(
    `people-${page}`,
    () =>
      fetch(`https://swapi.dev/api/people/?page=${page}`).then((res) =>
        res.json()
      )
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <h2>Home</h2>
      <p>
        <button onClick={handleAnteriorClick} disabled={!data.previous}>
          Anterior
        </button>
        <button onClick={handleProximaClick} disabled={!data.next}>
          Próxima
        </button>
      </p>
      <div>{isFetching ? "Updating..." : ""}</div>
      <ol start={(page - 1) * 10 + 1}>
        {data.results.map((person) => (
          <li key={person.url}>
            <Person person={person} />
          </li>
        ))}
      </ol>
    </div>
  );
}
