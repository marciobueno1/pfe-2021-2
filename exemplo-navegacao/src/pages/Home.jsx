import React from "react";
import { useQuery } from "react-query";
import { useStoreActions, useStoreState } from "easy-peasy";

import { getPeople } from "../api";
import { Person } from "../components/Person";

export function Home() {
  const page = useStoreState((state) => state.home.page);
  const setPage = useStoreActions((state) => state.home.setPage);
  const handleAnteriorClick = () => {
    setPage(page - 1);
  };
  const handleProximaClick = () => {
    setPage(page + 1);
  };
  const { isLoading, error, data, isFetching } = useQuery(
    `people-${page}`,
    getPeople(page)
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <h2>Home</h2>
      <p>
        <button onClick={handleAnteriorClick} disabled={!data.data.previous}>
          Anterior
        </button>
        <button onClick={handleProximaClick} disabled={!data.data.next}>
          Próxima
        </button>
      </p>
      <div>{isFetching ? "Updating..." : ""}</div>
      <ol start={(page - 1) * 10 + 1}>
        {data.data.results.map((person) => (
          <li key={person.url}>
            <Person person={person} />
          </li>
        ))}
      </ol>
    </div>
  );
}
