import React, { useEffect } from "react";

let deb = null;

const Search = () => {
  const [search, setSearch] = React.useState("");
  const [results, setResults] = React.useState([]);

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (deb) {
      clearTimeout(deb);
    }
    deb = setTimeout(() => {
      fetch(`http://localhost:3004/clients?clientName_like=${search}`)
        .then((res) => res.json())
        .then(setResults);
      deb = null;
    }, 500);
  }, [search]);

  return (
    <div>
      <h2>Search by name</h2>
      <input type="search" onChange={onChange} value={search} />
      {results.map((result) => (
        <p key={result.clientId}>
          {result.clientName}, roles:
          {result.roles.map((role) => role.roleName).join(",")}
        </p>
      ))}
    </div>
  );
};

export default Search;
