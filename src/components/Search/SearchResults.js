import React, { Suspense, useEffect } from 'react'



const SearchResults = ({ query }) => {
    const [results, setResults] = React.useState([])
    useEffect(() => {
        const abortController = new AbortController()
        fetch(`https://jsonplaceholder.typicode.com/users?name_like=${query}`, { signal: abortController.signal })
            .then(res => res.json())
            .then(data => setResults(data))
        return () => {
            abortController.abort()
        }
    }, [query])
    return (
        <div>
            <h2>SearchResults</h2>
            <Suspense fallback={<div>Loading...</div>}>
                {results?.map((result) => (
                    <p key={result.id}>
                        {result.name}
                    </p>
                ))}
            </Suspense>
        </div>
    )
}

export default SearchResults