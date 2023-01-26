import React, { Suspense, useDeferredValue, useEffect } from "react";
import SearchResults from "./SearchResults";

const Search = () => {
  const [search, setSearch] = React.useState("");
  const defferSearch = useDeferredValue(search);

  const isSame = search === defferSearch;
  console.log(search, defferSearch, isSame)

  const onChange = (e) => {
    setSearch(e.target.value);
  };



  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <h2>Search by name</h2>
        <input type="search" onChange={onChange} value={search} />
        <div style={{
          opacity: isSame ? 1 : 0.3,
        }}>
         <SearchResults query={defferSearch} />
        </div>
      </div>
    </Suspense>
  );
};

export default Search;
